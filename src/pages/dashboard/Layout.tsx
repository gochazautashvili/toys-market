import { Outlet } from "react-router-dom";
import Toys from "./Toys";

const Layout = () => {
  return (
    <main className="container">
      <Outlet />
      <Toys />
    </main>
  );
};

export default Layout;
