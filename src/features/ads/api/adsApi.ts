import apiClient from '../../../shared/api/apiClient';
import type { PaginatedResponse } from '../../../shared/types/api';
import type { Ad, CreateAdPayload, UpdateAdPayload } from '../types';

/**
 * Fetch a paginated list of all ads.
 * @param page   1-based page number (default: 1)
 * @param limit  Items per page (default: 20)
 * @param search Optional search query string
 */
export async function getAds(
  page = 1,
  limit = 20,
  search?: string,
): Promise<PaginatedResponse<Ad>> {
  const { data } = await apiClient.get<PaginatedResponse<Ad>>('/ads', {
    params: { page, limit, search },
  });
  return data;
}

/**
 * Fetch a single ad by its ID.
 */
export async function getAdById(id: string): Promise<Ad> {
  const { data } = await apiClient.get<Ad>(`/ads/${id}`);
  return data;
}

/**
 * Fetch all ads posted by the currently authenticated user.
 */
export async function getMyAds(page = 1, limit = 20): Promise<PaginatedResponse<Ad>> {
  const { data } = await apiClient.get<PaginatedResponse<Ad>>('/ads/me', {
    params: { page, limit },
  });
  return data;
}

/**
 * Create a new ad listing.
 */
export async function createAd(payload: CreateAdPayload): Promise<Ad> {
  const { data } = await apiClient.post<Ad>('/ads', payload);
  return data;
}

/**
 * Update an existing ad (partial update supported).
 */
export async function updateAd(id: string, payload: UpdateAdPayload): Promise<Ad> {
  const { data } = await apiClient.patch<Ad>(`/ads/${id}`, payload);
  return data;
}

/**
 * Delete an ad by its ID.
 */
export async function deleteAd(id: string): Promise<void> {
  await apiClient.delete(`/ads/${id}`);
}

/**
 * Upload images for an ad — returns the uploaded image URLs.
 */
export async function uploadAdImages(files: File[]): Promise<string[]> {
  const formData = new FormData();
  files.forEach((file) => formData.append('images', file));

  const { data } = await apiClient.post<{ urls: string[] }>('/ads/images', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data.urls;
}
