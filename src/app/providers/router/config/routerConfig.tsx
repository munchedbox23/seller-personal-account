import { MainLayout } from "../../../layouts/MainLayout/ui/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "@/pages/NotFoundPage/ui/NotFoundPage";
import { appRoutes } from "@/shared/const/router";
import { AdvertisementPage } from "@/pages/AdvertisementPage";
import { Navigate } from "react-router-dom";
import { SelectedAdvertisementPage } from "@/pages/SelectedAdvertisementPage";
import { OrdersPage } from "@/pages/OrdersPage";

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to={appRoutes.allAdvertisements} /> },
  {
    path: appRoutes.allAdvertisements,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <AdvertisementPage />,
      },
      { path: appRoutes.advertisement, element: <SelectedAdvertisementPage /> },
    ],
  },
  {
    path: appRoutes.orders,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <OrdersPage />,
      },
    ],
  },
  {
    path: appRoutes.not_found,
    element: <NotFoundPage />,
  },
]);
