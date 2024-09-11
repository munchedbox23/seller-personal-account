import { MainLayout } from "../../../layouts/MainLayout/ui/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "@/pages/NotFoundPage/ui/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
