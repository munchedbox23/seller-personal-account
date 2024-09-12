import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "@/shared/const/baseUrl";
import { TOrder } from "../model/types/ordersTypes";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API.baseUrl,
  }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    getAllOrders: builder.query<TOrder[], void>({
      query: () => `${API.endpoints.orders}`,
    }),
  }),
});

export const { useGetAllOrdersQuery } = ordersApi;
