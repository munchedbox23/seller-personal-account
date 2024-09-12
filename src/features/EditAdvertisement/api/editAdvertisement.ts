import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TUpdateAdvertisement } from "../model/types/editAdvertisement";
import { API } from "@/shared/const/baseUrl";

export const editAdvertisementsApi = createApi({
  reducerPath: "editAdvertisementsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API.baseUrl }),
  endpoints: (builder) => ({
    patchAdvertisement: builder.mutation<
      void,
      { id: string; patchData: TUpdateAdvertisement }
    >({
      query: ({ id, patchData }) => ({
        url: `${API.endpoints.advertisement}/${id}`,
        method: "PATCH",
        body: patchData,
      }),
    }),
    deleteAdvertisement: builder.mutation<void, string>({
      query: (id) => ({
        url: `${API.endpoints.advertisement}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { usePatchAdvertisementMutation, useDeleteAdvertisementMutation } =
  editAdvertisementsApi;
