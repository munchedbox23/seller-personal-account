import type { RootState } from "@/app/providers/StoreProvider";

export const selectIsAdvertisementsLoading = (state: RootState) =>
  state.advertisements.isAdvertisementsLoading;

export const selectAdvertisementsError = (state: RootState) =>
  state.advertisements.advertisementsError;
