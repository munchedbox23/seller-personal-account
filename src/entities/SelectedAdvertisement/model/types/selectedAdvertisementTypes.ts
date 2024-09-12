import { TAdvertisement } from "@/shared/types/avertisementTypes";

export type TSelectedAdvertisementState = {
  selectedAdvertisement: TAdvertisement;
  advertisementLoading: boolean;
  error?: string | null;
};
