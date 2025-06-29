import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { Dashboard } from "./Layouts/Dashboard.jsx";
import { Main } from "./Layouts/Main.jsx";
import { Home } from "./pages/Home.jsx";
import Login from "./pages/Login.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children:[
          {
            path:"/dashboard",
            element: <h1>This is the dashboard home</h1>
          }
        ]
      },
      {
        path:"login",
        element:<Login></Login>
      }
    ],
  },
  {
    path:"*",
    element: <h1 className="text-center text-4xl  my-28 text-red-500">Error 404</h1>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
