import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "@/shared/const/baseUrl";
import {
  TAdvertisement,
  TCreateAdvertisement,
  TUpdateAdvertisement,
} from "../model/types/avertisementTypes";

export const advertisementsApi = createApi({
  reducerPath: "advertisementsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API.baseUrl,
  }),
  endpoints: (builder) => ({
    getAdvertisements: builder.query<TAdvertisement[], void>({
      query: () => API.endpoints.advertisement,
    }),
    createAdvertisement: builder.mutation<TAdvertisement, TCreateAdvertisement>(
      {
        query: (newAdvertisement) => ({
          url: API.endpoints.advertisement,
          method: "POST",
          body: newAdvertisement,
        }),
      }
    ),
    getAdvertisementById: builder.query<TAdvertisement, string>({
      query: (id) => `${API.endpoints.advertisement}/${id}`,
    }),
    updateAdvertisement: builder.mutation<
      TAdvertisement,
      { id: string; updatedData: TUpdateAdvertisement }
    >({
      query: ({ id, updatedData }) => ({
        url: `${API.endpoints.advertisement}/${id}`,
        method: "PUT",
        body: updatedData,
      }),
    }),
    patchAdvertisement: builder.mutation<
      TAdvertisement,
      { id: string; patchData: Partial<TUpdateAdvertisement> }
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

export const {
  useGetAdvertisementsQuery,
  useCreateAdvertisementMutation,
  useGetAdvertisementByIdQuery,
  useUpdateAdvertisementMutation,
  usePatchAdvertisementMutation,
  useDeleteAdvertisementMutation,
} = advertisementsApi;
