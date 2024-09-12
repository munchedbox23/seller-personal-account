import { advertisementsApi } from "../../api/advertisementsApi";

// Получаем все объявления через селектор RTK Query
export const selectAdvertisements =
  advertisementsApi.endpoints.getAdvertisements.select();

// Получаем конкретное объявление по ID
export const selectAdvertisementById = (id: string) =>
  advertisementsApi.endpoints.getAdvertisementById.select(id);
