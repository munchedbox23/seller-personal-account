import { combineReducers } from "redux";
import { advertisementsApi } from "@/entities/Advertisement/api/advertisementsApi";
import advertisementSlice from "@/entities/Advertisement/model/sllice/advertisementSlice";
import addAdvertisementSlice from "@/features/AddAdvertisement/model/slice/addAdvertisementSlice";
import selectedAdvertisementSlice from "@/entities/SelectedAdvertisement/model/slice/selectedAdvertisementSlice";
import { editAdvertisementsApi } from "@/features/EditAdvertisement/api/editAdvertisement";
import { ordersApi } from "@/entities/Orders";
import ordersSlice from "@/entities/Orders/model/slice/ordersSlice";

export const rootReducer = combineReducers({
  [advertisementsApi.reducerPath]: advertisementsApi.reducer,
  [editAdvertisementsApi.reducerPath]: editAdvertisementsApi.reducer,
  [ordersApi.reducerPath]: ordersApi.reducer,
  advertisements: advertisementSlice,
  orders: ordersSlice,
  addAdvertisements: addAdvertisementSlice,
  selectedAdvertisement: selectedAdvertisementSlice,
});
