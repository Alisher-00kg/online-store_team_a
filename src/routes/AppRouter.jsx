import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { UserLayout } from "../Layout/UserLayout";
import { UserMainPage } from "../pages/userPage/UserMainPage";
import { InnerPageCards } from "../pages/userPage/InnerPageCards";
import { FavoritePage } from "../pages/userPage/FavoritePage";
import { AdminLayout } from "../Layout/AdminLayout";
import { AdminMainPage } from "../pages/adminPage/AdminMainPage";
import { ChildrenPage } from "../pages/adminPage/ChildrenPage";
import { ManPage } from "../pages/adminPage/ManPage";
import { WomanPage } from "../pages/adminPage/WomanPage";
import SignUp from "../auth/SignUp";
import { Payment } from "../components/Payment";

export const AppRouter = () => {
  const routes = createBrowserRouter([
    {
      element: <UserLayout />,
      children: [
        { path: "/", element: <Navigate to="/main" replace /> },
        { path: "/main", element: <UserMainPage /> },
        { path: "/main/:cardId", element: <InnerPageCards /> },
        { path: "/favorites", element: <FavoritePage /> },
        { path: "/payment", element: <Payment /> },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout allowedRoles={["ADMIN"]} />,
      children: [
        { index: true, element: <Navigate to="main" replace /> },
        { path: "main", element: <AdminMainPage /> },
        { path: "woman", element: <WomanPage /> },
        { path: "man", element: <ManPage /> },
        { path: "children", element: <ChildrenPage /> },
      ],
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    // { path: "/payment", element: <Payment/> },
    {
      path: "*",
      element: <h1>Страница не найдена</h1>,
    },
  ]);
  return <RouterProvider router={routes} />;
};
