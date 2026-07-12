export interface Ad {
  id: string;
  title: string;
  description: string;
  subject: string;
  price: number;
  imageUrls: string[];
  sellerId: string;
  sellerName: string;
  sellerAvatarUrl?: string;
  category?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAdPayload {
  title: string;
  description: string;
  subject: string;
  price: number;
  imageUrls: string[];
  category?: string;
}

export type UpdateAdPayload = Partial<CreateAdPayload>;
