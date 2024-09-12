import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordersApi } from "../../api/ordersApi";

type TOrdersSliceState = {
  isOrdersLoading: boolean;
  ordersError: string | null;
};

const initialState: TOrdersSliceState = {
  isOrdersLoading: false,
  ordersError: null,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        ordersApi.endpoints.getAllOrders.matchFulfilled,
        (state, action) => {
          state.isOrdersLoading = false;
        }
      )
      .addMatcher(ordersApi.endpoints.getAllOrders.matchPending, (state) => {
        state.isOrdersLoading = true;
        state.ordersError = null;
      })
      .addMatcher(
        ordersApi.endpoints.getAllOrders.matchRejected,
        (state, action) => {
          state.isOrdersLoading = false;
          state.ordersError = action.error.message ?? null;
        }
      );
  },
});

export default ordersSlice.reducer;
