import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "@/shared/const/baseUrl";
import { TOrder } from "@/entities/Orders/model/types/ordersTypes";

export const executeOrderApi = createApi({
  reducerPath: "executeOrderApi",
  baseQuery: fetchBaseQuery({ baseUrl: API.baseUrl }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    updateOrderStatus: builder.mutation<TOrder, { id: string; status: number }>(
      {
        query: ({ id, status }) => ({
          url: `${API.endpoints.orders}/${id}`,
          method: "PATCH",
          body: { status },
        }),
        invalidatesTags: ["Orders"],
      }
    ),
  }),
});

export const { useUpdateOrderStatusMutation } = executeOrderApi;
