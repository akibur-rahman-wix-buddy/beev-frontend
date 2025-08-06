import NotFoundError from "@/pages/Error/NotFoundError";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router";
import ErrorPage from "@/pages/Error/ErrorPage";
import MainLayout from "@/layouts/MainLayout";

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
        path: "/dummy",
        element: <div>Dummy</div>,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundError />,
  },
]);
