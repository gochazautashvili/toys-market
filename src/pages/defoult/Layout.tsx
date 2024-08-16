import Footer from "@/components/Footer";
import Instagram from "@/components/Instagram";
import Subscribe from "@/components/Subscribe";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <main>
        <Outlet />
        <Subscribe />
        <Instagram />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
