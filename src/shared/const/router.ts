export enum AppRoutes {
  ADVERTISMENT = "advertisement",
  ALL_ADVERTISMENTS = "allAdvertisements",
  SOME_ORDER = "order",
  ORDERS = "orders",
  NOT_FOUND = "not_found",
}

export const appRoutes: Record<AppRoutes, string> = {
  [AppRoutes.ADVERTISMENT]: "/advertisements/:id",
  [AppRoutes.ALL_ADVERTISMENTS]: "/advertisements",
  [AppRoutes.ORDERS]: "/orders",
  [AppRoutes.SOME_ORDER]: "/orders/:id",
  [AppRoutes.NOT_FOUND]: "*",
};
