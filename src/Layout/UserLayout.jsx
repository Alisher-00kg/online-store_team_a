import { Outlet } from "react-router-dom";
import { Header } from "../components/userComponents/Header";
import { Footer } from "../components/Footer";

export const UserLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
