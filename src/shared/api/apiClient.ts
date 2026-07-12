import axios, {
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';
import { storage } from '../utils/storage';
import type { ApiError } from '../types/api';

// ---------------------------------------------------------------------------
// Base instance
// ---------------------------------------------------------------------------
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000/api/v1',
  timeout: 15_000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// ---------------------------------------------------------------------------
// Request interceptor — attach access token on every outgoing request
// ---------------------------------------------------------------------------
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = storage.getToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

// ---------------------------------------------------------------------------
// Response interceptor — normalise errors + handle 401 auto-logout
// ---------------------------------------------------------------------------
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<{ message?: string; errors?: Record<string, string[]> }>) => {
    const statusCode = error.response?.status ?? 0;

    // Auto-logout on expired / invalid token
    if (statusCode === 401) {
      storage.clearAll();
      // Redirect to login without using React Router so it works anywhere
      window.location.href = '/login';
    }

    // Build a consistent ApiError shape so callers never have to inspect
    // the raw Axios error structure
    const apiError: ApiError = {
      message:
        error.response?.data?.message ??
        error.message ??
        'An unexpected error occurred.',
      statusCode,
      errors: error.response?.data?.errors,
    };

    return Promise.reject(apiError);
  },
);

export default apiClient;
