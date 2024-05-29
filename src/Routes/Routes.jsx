import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../404/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";


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
          element:<Home></Home>,
        },
        {
          path: "/classes",
          element:<Home></Home>,
        },
        {
          path: "/login",
          element:<Login></Login> ,
        },
      ],
    },
  ]);

  export default router;