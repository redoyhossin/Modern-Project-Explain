import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Card from "../pages/Cards/Card";
import Home from "../pages/Home/Home";
import Testimonial from "../pages/Testimonials/Testimonial";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/Card",
        element:<Card/>
      },
      {
        path:"/testimonials",
        element:<Testimonial/>
      }
    ]
    
  },
]);
