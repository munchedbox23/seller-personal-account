import { combineReducers } from "redux";
import { advertisementsApi } from "@/entities/Advertisement/api/advertisementsApi";
import advertisementSlice from "@/entities/Advertisement/model/sllice/advertisementSlice";
import addAdvertisementSlice from "@/features/AddAdvertisement/model/slice/addAdvertisementSlice";

export const rootReducer = combineReducers({
  [advertisementsApi.reducerPath]: advertisementsApi.reducer,
  advertisements: advertisementSlice,
  addAdvertisements: addAdvertisementSlice,
});
