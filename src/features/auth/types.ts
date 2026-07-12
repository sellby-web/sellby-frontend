// Auth-specific types

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface SendOtpRequest {
  email: string;
}

export interface SendOtpResponse {
  message: string;
  expiresIn: number; // seconds until OTP expires
}

export interface VerifyOtpRequest {
  email: string;
  otp: string;
}

export interface VerifyOtpResponse {
  tokens: AuthTokens;
  isNewUser: boolean;
}
