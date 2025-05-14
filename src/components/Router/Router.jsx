import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import FetchOld from "../Pages/FetchOld";
import FetchNew from "../Pages/FetchNew";
import MainLayout from "../Layout/MainLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/old",
        element: <FetchOld />,
      },
      {
        path: "/new",
        element: <FetchNew />,
      },
    ],
  },
]);
export default Router;
