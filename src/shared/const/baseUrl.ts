interface IApi {
  baseUrl: string;
  endpoints: Record<string, string>;
}

export const API: IApi = {
  baseUrl: "http://localhost:8000",
  endpoints: {
    advertisement: "/advertisements",
    orders: "/orders",
  },
};
