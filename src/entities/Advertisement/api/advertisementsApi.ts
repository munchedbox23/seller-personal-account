import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "@/shared/const/baseUrl";
import { TAdvertisement } from "@/shared/types/avertisementTypes";

export const advertisementsApi = createApi({
  reducerPath: "advertisementsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API.baseUrl,
  }),
  tagTypes: ["Advertisement"],
  endpoints: (builder) => ({
    getAllAdvertisements: builder.query<TAdvertisement[], void>({
      query: () => `${API.endpoints.advertisement}`,
    }),
    getAdvertisementsByQuery: builder.query<
      TAdvertisement[],
      { start: number; limit: number }
    >({
      query: ({ start, limit }) =>
        `${API.endpoints.advertisement}?_start=${start}&_limit=${limit}`,
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({ type: "Advertisement", id }))
          : [{ type: "Advertisement" }],
    }),
  }),
});

export const {
  useGetAllAdvertisementsQuery,
  useGetAdvertisementsByQueryQuery,
} = advertisementsApi;
