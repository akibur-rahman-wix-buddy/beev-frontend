import { createBrowserRouter } from "react-router";
import ErrorPage from "@/pages/Error/ErrorPage";
import NotFoundError from "@/pages/Error/NotFoundError";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/home/Home";
import TheHeartWallPage from "@/pages/public/TheHeartWallPage";
import HaveANeedPage from "@/pages/public/HaveANeedPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/the-heart-wall",
        element: <TheHeartWallPage />,
      },
      {
        path: "/have-a-need",
        element: <HaveANeedPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundError />,
  },
]);
