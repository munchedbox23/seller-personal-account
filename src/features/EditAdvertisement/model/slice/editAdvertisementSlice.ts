import { editAdvertisementsApi } from './../../api/editAdvertisement';
import { createSlice } from "@reduxjs/toolkit";

type TEditAdvertisementState = {
  isEditLoading: boolean;
  editError: string | null;
  isDeleteLoading: boolean;
  deleteError: string | null;
};

const initialState: TEditAdvertisementState = {
  isEditLoading: false,
  editError: null,
  isDeleteLoading: false,
  deleteError: null,
};

export const editAdvertisementsSlice = createSlice({
  name: "editAdvertisements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        editAdvertisementsApi.endpoints.patchAdvertisement.matchPending,
        (state) => {
          state.isEditLoading = true;
          state.editError = null;
        }
      )
      .addMatcher(
        editAdvertisementsApi.endpoints.patchAdvertisement.matchFulfilled,
        (state) => {
          state.isEditLoading = false;
          state.editError = null;
        }
      )
      .addMatcher(
        editAdvertisementsApi.endpoints.patchAdvertisement.matchRejected,
        (state, action) => {
          state.isEditLoading = false;
        }
      );

    builder
      .addMatcher(
        editAdvertisementsApi.endpoints.deleteAdvertisement.matchPending,
        (state) => {
          state.isDeleteLoading = true;
          state.deleteError = null;
        }
      )
      .addMatcher(
        editAdvertisementsApi.endpoints.deleteAdvertisement.matchFulfilled,
        (state) => {
          state.isDeleteLoading = false;
          state.deleteError = null;
        }
      )
      .addMatcher(
        editAdvertisementsApi.endpoints.deleteAdvertisement.matchRejected,
        (state, action) => {
          state.isDeleteLoading = false;
        }
      );
  },
});

export default editAdvertisementsSlice.reducer;
