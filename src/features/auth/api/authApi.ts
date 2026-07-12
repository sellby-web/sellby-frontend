import apiClient from '../../../shared/api/apiClient';
import { storage } from '../../../shared/utils/storage';
import type {
  SendOtpRequest,
  SendOtpResponse,
  VerifyOtpRequest,
  VerifyOtpResponse,
} from '../types';

/**
 * Step 1 — Send a one-time password to the given university email.
 */
export async function sendOtp(payload: SendOtpRequest): Promise<SendOtpResponse> {
  const { data } = await apiClient.post<SendOtpResponse>('/auth/otp/send', payload);
  return data;
}

/**
 * Step 2 — Verify the OTP and receive JWT tokens.
 * Tokens are persisted in localStorage automatically.
 */
export async function verifyOtp(payload: VerifyOtpRequest): Promise<VerifyOtpResponse> {
  const { data } = await apiClient.post<VerifyOtpResponse>('/auth/otp/verify', payload);

  // Persist tokens immediately so subsequent requests are authenticated
  storage.setToken(data.tokens.accessToken);
  storage.setRefreshToken(data.tokens.refreshToken);

  return data;
}

/**
 * Clears local tokens and calls the server to invalidate the refresh token.
 */
export async function logout(): Promise<void> {
  try {
    await apiClient.post('/auth/logout');
  } finally {
    // Always clear local storage even if the server call fails
    storage.clearAll();
  }
}
