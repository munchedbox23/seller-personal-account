import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TAdvertisement } from "../types/avertisementTypes";
import { advertisementsApi } from "../../api/advertisementsApi";

type TAdvertisementState = {
  isAdvertisementsLoading: boolean;
  advertisementsError: string | null;
};

const initialState: TAdvertisementState = {
  isAdvertisementsLoading: false,
  advertisementsError: null,
};

export const advertisementsSlice = createSlice({
  name: "advertisements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        advertisementsApi.endpoints.getAdvertisements.matchFulfilled,
        (state, action: PayloadAction<TAdvertisement[]>) => {
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

export default advertisementsSlice.reducer;
