import { createSlice } from "@reduxjs/toolkit";
import { addAdvertisementThunk } from "../services/addAdvertisementThunk";

type TAddAdvertisementSlice = {
  isLoading: boolean;
  error?: string | null;
};

const initialState: TAddAdvertisementSlice = {
  isLoading: false,
  error: null,
};

const addAdvertisementsSlice = createSlice({
  name: "advertisements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAdvertisementThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAdvertisementThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addAdvertisementThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default addAdvertisementsSlice.reducer;
