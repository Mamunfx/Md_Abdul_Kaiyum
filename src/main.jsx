import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { Dashboard } from "./Layouts/Dashboard.jsx";
import { Main } from "./Layouts/Main.jsx";
import { Home } from "./pages/Home.jsx";
import  { Appointment_list}  from "./Components/Appointment_list.jsx";
import  { Doctor_visits }  from "./Components/Doctor_visits.jsx";
import  { Book_appointment }  from "./Components/Book_appointment.jsx";
import  { Bmi_Calcu}  from "./Components/Bmi_Calcu.jsx";
import Login from "./pages/Login.jsx"
import Dragable_Card from "./Components/Dragable_Card.jsx"
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
        path:"/book_appointment",
        element:<Book_appointment></Book_appointment>
      },
      {
        path:"/bmi_calcu",
        element:<Bmi_Calcu></Bmi_Calcu>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children:[
          {
            path:"/dashboard",
            element: <Dragable_Card></Dragable_Card>
          },
          {
            path:"/dashboard/appointment_list",
            element: <Appointment_list></Appointment_list>
          },
          {
            path:"/dashboard/doctor_visits",
            element: <Doctor_visits></Doctor_visits>
          },

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
