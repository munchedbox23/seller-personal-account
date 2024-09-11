import { MainLayout } from "../../../layouts/MainLayout/ui/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "@/pages/NotFoundPage/ui/NotFoundPage";
import { appRoutes } from "@/shared/const/router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: appRoutes.not_found,
    element: <NotFoundPage />,
  },
]);
