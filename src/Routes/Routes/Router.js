import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AllServices from "../../Pages/AllServices/AllServices";
import DetailsService from "../../Pages/DetailsService/DetailsService";
import MyReview from "../../Pages/MyReview/MyReview";
import Error from "../../Pages/Error/Error";
import AddService from "../../Pages/AddService/AddService";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
      },
      {
        path: "/services/:id",
        element: <DetailsService></DetailsService>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/review",
        element: <MyReview></MyReview>,
      },
      {
        path: "/addservice",
        element: <AddService></AddService>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
