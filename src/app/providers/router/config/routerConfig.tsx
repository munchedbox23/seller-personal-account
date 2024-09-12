import { MainLayout } from "../../../layouts/MainLayout/ui/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "@/pages/NotFoundPage/ui/NotFoundPage";
import { appRoutes } from "@/shared/const/router";
import { AdvertisementPage } from "@/pages/AdvertisementPage";
import { Navigate } from "react-router-dom";

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
    ],
  },
  {
    path: appRoutes.not_found,
    element: <NotFoundPage />,
  },
]);
