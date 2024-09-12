import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TSelectedAdvertisementState } from "../types/selectedAdvertisementTypes";
import { TAdvertisement } from "@/shared/types/avertisementTypes";
import { request } from "@/shared/lib/requests/requests";
import { API } from "@/shared/const/baseUrl";

export const initialState: TSelectedAdvertisementState = {
  selectedAdvertisement: {
    id: "016ebc00-2578-4d5d-83d9-7acb0fc2da0f",
    imageUrl: "https://ray-ban-msk.ru/images/product/l/513163fd.jpg",
    name: "Очки",
    price: 10000,
    description: "Супер очки ",
    views: 0,
    likes: 0,
    createdAt: "2024-09-12T12:38:45.910Z",
  },
  advertisementLoading: false,
  error: null,
};

export const getAdvertisementById = createAsyncThunk<TAdvertisement, string>(
  "selectAdvertisements/getAdvertisementById",
  async (id) => {
    const response = await request<TAdvertisement>(
      `${API.baseUrl}${API.endpoints.advertisement}/${id}`
    );
    return response;
  }
);

export const selectAdvertisementsSlice = createSlice({
  name: "selectAdvertisements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdvertisementById.pending, (state) => {
        state.advertisementLoading = true;
      })
      .addCase(getAdvertisementById.fulfilled, (state, action) => {
        state.selectedAdvertisement = action.payload;
        state.advertisementLoading = false;
      })
      .addCase(getAdvertisementById.rejected, (state, action) => {
        state.advertisementLoading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export const {} = selectAdvertisementsSlice.actions;
export default selectAdvertisementsSlice.reducer;
