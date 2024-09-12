import { createAsyncThunk } from "@reduxjs/toolkit";
import { TAdvertisement } from "@/entities/Advertisement";
import { request } from "@/shared/lib/requests/requests";
import { API } from "@/shared/const/baseUrl";
import { TCreateAdvertisement } from "../types/addAdvertisement";
import { v4 as uuidv4 } from "uuid";

export const addAdvertisementThunk = createAsyncThunk<
  TAdvertisement,
  TCreateAdvertisement,
  { rejectValue: string }
>(
  "advertisements/createAdvertisement",
  async (newAdvertisement: TCreateAdvertisement, { rejectWithValue }) => {
    try {
      const response = await request<TAdvertisement>(
        `${API.baseUrl}${API.endpoints.advertisement}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            ...newAdvertisement,
            id: uuidv4(),
            views: 0,
            likes: 0,
            createdAt: new Date().toISOString(),
          }),
        }
      );
      return response;
    } catch (error) {
      return rejectWithValue("Не удалось создать объявление");
    }
  }
);
