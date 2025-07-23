import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Router/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
