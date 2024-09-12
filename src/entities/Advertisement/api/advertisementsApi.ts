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
    getAdvertisements: builder.query<TAdvertisement[], { limit: number }>({
      query: ({ limit }) => `advertisements?_start=0&_limit=${limit}`,
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({ type: "Advertisement", id }))
          : [{ type: "Advertisement" }],
    }),
  }),
});

export const { useGetAdvertisementsQuery } = advertisementsApi;
