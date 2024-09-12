import { RootState } from "@/app/providers/StoreProvider";

export const getSelectorLoading = (store: RootState) =>
  store.orders.isOrdersLoading;

export const getSelectorError = (store: RootState) => store.orders.ordersError;
