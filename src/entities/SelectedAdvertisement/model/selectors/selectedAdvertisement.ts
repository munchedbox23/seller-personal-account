import { RootState } from "@/app/providers/StoreProvider";

export const getSelectedAdvertisementData = (state: RootState) =>
  state.selectedAdvertisement.selectedAdvertisement;

export const getSelectedAdvertisementIsLoading = (state: RootState) =>
  state.selectedAdvertisement.advertisementLoading;

export const getSelectedAdvertisementError = (state: RootState) =>
  state.selectedAdvertisement.error;
