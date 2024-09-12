export type TAdvertisement = {
  id: string;
  name: string;
  description?: string;
  price: number;
  createdAt: string;
  views: number;
  likes: number;
  imageUrl?: string;
};

export type TCreateAdvertisement = {
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
};

export type TUpdateAdvertisement = {
  name?: string;
  description?: string;
  price?: number;
  imageUrl?: string;
};
