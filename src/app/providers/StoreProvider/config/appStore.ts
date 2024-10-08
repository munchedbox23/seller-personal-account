import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { rootReducer } from "./rootReducer";
import { advertisementsApi } from "@/entities/Advertisement/api/advertisementsApi";
import { editAdvertisementsApi } from "@/features/EditAdvertisement/api/editAdvertisement";
import { ordersApi } from "@/entities/Orders";
import { executeOrderApi } from "@/features/OpenOrder";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      advertisementsApi.middleware,
      editAdvertisementsApi.middleware,
      ordersApi.middleware,
      executeOrderApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
