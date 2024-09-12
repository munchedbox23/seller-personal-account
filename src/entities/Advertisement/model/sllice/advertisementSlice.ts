import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { advertisementsApi } from "../../api/advertisementsApi";

type TAdvertisementState = {
  isAdvertisementsLoading: boolean;
  advertisementsError: string | null;
  limit: number;
  start: number;
};

const initialState: TAdvertisementState = {
  isAdvertisementsLoading: false,
  advertisementsError: null,
  start: 0,
  limit: 10,
};

export const advertisementsSlice = createSlice({
  name: "advertisements",
  initialState,
  reducers: {
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        advertisementsApi.endpoints.getAdvertisements.matchFulfilled,
        (state) => {
          state.isAdvertisementsLoading = false;
          state.advertisementsError = null;
        }
      )
      .addMatcher(
        advertisementsApi.endpoints.getAdvertisements.matchPending,
        (state) => {
          state.isAdvertisementsLoading = true;
          state.advertisementsError = null;
        }
      )
      .addMatcher(
        advertisementsApi.endpoints.getAdvertisements.matchRejected,
        (state, action) => {
          state.isAdvertisementsLoading = false;
          state.advertisementsError = action.error.message ?? null;
        }
      );
  },
});

export const { setLimit } = advertisementsSlice.actions;
export default advertisementsSlice.reducer;
