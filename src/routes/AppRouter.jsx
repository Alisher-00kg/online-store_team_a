import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { InnerPageCards } from "../pages/InnerPageCards";
import { Layout } from "../Layout/Layout";
import { FavoritePage } from "../pages/FavoritePage";

export const AppRouter = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/main" />,
        },
        {
          path: "/main/*",
          element: <MainPage />,
        },
        {
          path: "main/:cardId",
          element: <InnerPageCards />,
        },
        {
          path: "/favorites",
          element: <FavoritePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};
