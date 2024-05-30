import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../404/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Instructors from "../pages/Instructor/Instructors";
import AllClasses from "../pages/Classes/AllClasses";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";





const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element:<Home></Home>,
        },
        {
          path: "/instructor",
          element:<Instructors></Instructors>,
        },
        {
          path: "/classes",
          element: <AllClasses></AllClasses>
        },
        {
          path: "/login",
          element:<Login></Login> ,
        },
        {
          path: "/register",
          element:<Register></Register> ,
        },
        
      ],
      
     
    },
    {
      path: "dashboard",
      element:<PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "allUsers",
          element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>
        },
      ]
    }
    
  ]);

  export default router;