import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "@/shared/const/baseUrl";
import {
  TAdvertisement,
  TUpdateAdvertisement,
} from "../model/types/avertisementTypes";

export const advertisementsApi = createApi({
  reducerPath: "advertisementsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API.baseUrl,
  }),
  tagTypes: ["Advertisement"],
  endpoints: (builder) => ({
    getAdvertisements: builder.query<TAdvertisement[], void>({
      query: () => API.endpoints.advertisement,
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({ type: "Advertisement", id }))
          : ["Advertisement"],
    }),
    getAdvertisementById: builder.query<TAdvertisement, string>({
      query: (id) => `${API.endpoints.advertisement}/${id}`,
      providesTags: (result, error, id) => [{ type: "Advertisement", id }],
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
      invalidatesTags: (result, error, { id }) => [
        { type: "Advertisement", id },
      ],
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
      invalidatesTags: (result, error, { id }) => [
        { type: "Advertisement", id },
      ],
    }),
    deleteAdvertisement: builder.mutation<void, string>({
      query: (id) => ({
        url: `${API.endpoints.advertisement}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Advertisement", id }],
    }),
  }),
});

export const {
  useGetAdvertisementsQuery,
  useGetAdvertisementByIdQuery,
  useUpdateAdvertisementMutation,
  usePatchAdvertisementMutation,
  useDeleteAdvertisementMutation,
} = advertisementsApi;
