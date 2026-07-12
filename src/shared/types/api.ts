// Generic API response wrappers used across all features

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// Typed API error thrown by the axios interceptor
export interface ApiError {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}
