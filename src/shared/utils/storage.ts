// Token storage keys — centralised so they never diverge between modules
export const TOKEN_KEY = 'sellby_access_token';
export const REFRESH_TOKEN_KEY = 'sellby_refresh_token';

export const storage = {
  getToken: (): string | null => localStorage.getItem(TOKEN_KEY),
  setToken: (token: string): void => localStorage.setItem(TOKEN_KEY, token),
  clearToken: (): void => localStorage.removeItem(TOKEN_KEY),

  getRefreshToken: (): string | null => localStorage.getItem(REFRESH_TOKEN_KEY),
  setRefreshToken: (token: string): void =>
    localStorage.setItem(REFRESH_TOKEN_KEY, token),
  clearRefreshToken: (): void => localStorage.removeItem(REFRESH_TOKEN_KEY),

  clearAll: (): void => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },
};
