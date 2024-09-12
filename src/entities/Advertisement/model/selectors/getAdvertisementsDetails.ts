import type { RootState } from "@/app/providers/StoreProvider";

// Селектор для получения статуса загрузки объявлений
export const selectIsAdvertisementsLoading = (state: RootState) =>
  state.advertisements.isAdvertisementsLoading;

// Селектор для получения ошибок загрузки объявлений
export const selectAdvertisementsError = (state: RootState) =>
  state.advertisements.advertisementsError;
