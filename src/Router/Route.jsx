import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Favorites from "../Components/Favorites/Favorites";
import ErrorPage from "../Components/ErrorPages/ErrorPage";
import SingIn from "../Components/SingInPage/SingIn";
import Home from "../Components/Home/Home";


const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/favorites",
            element: <Favorites></Favorites>
        },
        {
            path: "/singin",
            element: <SingIn></SingIn>
        }
      ]
    },
  ]);

export default myCreatedRoute;