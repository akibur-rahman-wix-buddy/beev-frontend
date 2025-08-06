import { RouterProvider } from "react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@/assets/css/styles.css";
import { routes } from "@/routes/Routes";
import MainProvider from "@/provider/MainProvider";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <MainProvider>
      <RouterProvider router={routes} />
    </MainProvider>
  </StrictMode>
);
