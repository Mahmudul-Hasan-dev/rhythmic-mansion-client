import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../404/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Instructors from "../pages/Instructor/Instructors";
import Classes from "../pages/Classes/Classes";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import AllClassContainer from "../pages/Classes/AllClassContainer";
import SelectedClass from '../pages/Dashboard/Student/SelectedClass/SelectedClass'
import MyClasses from '../pages/Dashboard/Instructor/MyClasses/MyClasses'



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
          element: <AllClassContainer></AllClassContainer>
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
        // admin dashboard
        {
          path: "allUsers",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        
        {
          path: "manageClass",
          element: <AdminRoute> <ManageClass></ManageClass> </AdminRoute>
        },
        // instructor dashboard
        {
          path: "addClass",
          element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path: "myClass",
          element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
        },
        {
          path: "selectedClass",
          element: <PrivateRoute><SelectedClass></SelectedClass></PrivateRoute>
        },
        

      ]
    }
    
  ]);

  export default router;