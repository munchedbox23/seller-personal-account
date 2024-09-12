import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { advertisementsApi } from "../../api/advertisementsApi";

type TAdvertisementState = {
  isAdvertisementsLoading: boolean;
  advertisementsError: string | null;
  limit: number;
  start: number;
  page: number;
  totalRecords: number; // Общее количество записей
};

const initialState: TAdvertisementState = {
  isAdvertisementsLoading: false,
  advertisementsError: null,
  start: 0,
  limit: 10,
  page: 1,
  totalRecords: 0,
};

export const advertisementsSlice = createSlice({
  name: "advertisements",
  initialState,
  reducers: {
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
      state.page = 1;
      state.start = 0;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
      state.start = (action.payload - 1) * state.limit;
    },
    setTotalRecords(state, action: PayloadAction<number>) {
      state.totalRecords = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        advertisementsApi.endpoints.getAllAdvertisements.matchFulfilled,
        (state, action) => {
          state.totalRecords = action.payload.length;
        }
      )
      .addMatcher(
        advertisementsApi.endpoints.getAllAdvertisements.matchPending,
        (state) => {
          state.isAdvertisementsLoading = true;
          state.advertisementsError = null;
        }
      )
      .addMatcher(
        advertisementsApi.endpoints.getAllAdvertisements.matchRejected,
        (state, action) => {
          state.isAdvertisementsLoading = false;
          state.advertisementsError = action.error.message ?? null;
        }
      )
      .addMatcher(
        advertisementsApi.endpoints.getAdvertisementsByQuery.matchPending,
        (state) => {
          state.isAdvertisementsLoading = true;
          state.advertisementsError = null;
        }
      )
      .addMatcher(
        advertisementsApi.endpoints.getAdvertisementsByQuery.matchFulfilled,
        (state) => {
          state.isAdvertisementsLoading = false;
          state.advertisementsError = null;
        }
      )
      .addMatcher(
        advertisementsApi.endpoints.getAdvertisementsByQuery.matchRejected,
        (state, action) => {
          state.isAdvertisementsLoading = false;
          state.advertisementsError = action.error.message ?? null;
        }
      );
  },
});

export const { setLimit, setPage, setTotalRecords } =
  advertisementsSlice.actions;
export default advertisementsSlice.reducer;
