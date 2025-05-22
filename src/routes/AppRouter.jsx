import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { InnerPageCards } from "../pages/InnerPageCards";
import { Layout } from "../Layout/Layout";

import AdminLayout from "../Layout/AdminLayout";
import { ManPage } from "../pages/manPage";
import { WomanPage } from "../pages/WomanPage";
import { ChildrenPage } from "../pages/ChildrenPage";

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
      ],
    },
    {
      path: "adminpage",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="womanpage" />,
        },
        {
          path: "childrenpage",
          element: <ChildrenPage />,
        },
        {
          path: "manpage",
          element: <ManPage />,
        },
        {
          path: "womanpage",
          element: <WomanPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};
