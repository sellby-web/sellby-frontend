import { storage } from '../../../shared/utils/storage';

/**
 * Lightweight hook that exposes the current auth state derived
 * purely from localStorage — no network calls.
 *
 * For server-validated auth state, pair this with a /profile
 * fetch inside your AuthProvider.
 */
export function useAuth() {
  const isAuthenticated = (): boolean => storage.getToken() !== null;

  return { isAuthenticated };
}
