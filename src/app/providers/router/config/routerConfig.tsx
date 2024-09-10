import { MainLayout } from "../../../layouts/MainLayout/ui/MainLayout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);
