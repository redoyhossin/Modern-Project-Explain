import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Card from "../pages/Card/Card";
import Home from "../pages/Home/Home";
import Testimonial from "../pages/Testimonial/Testimonial";

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
        path:"/testimonial",
        element:<Testimonial/>
      }
    ]
    
  },
]);
