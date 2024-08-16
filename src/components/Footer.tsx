import { Link } from "react-router-dom";
import { ScanFace } from "lucide-react";
import useUser from "@/data/useUser";
import { Button } from "./ui/button";

const Footer = () => {
  const { user } = useUser();

  const handleSingOut = () => {
    localStorage.removeItem("user-token");
    window.location.reload();
  };

  return (
    <footer className="bg-primary pb-8 pt-12 text-white">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <Link className="font-Round text-2xl" to="/">
            ToyStore
          </Link>
          <div className="flex items-center gap-8">
            {links.map((link) => {
              return (
                <Link
                  className="flex text-xs hover:underline md:text-sm"
                  key={link.path}
                  to={link.path}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-4">
            <ScanFace />
          </div>
        </div>
        <div className="my-10 h-px w-full bg-white" />
        <div className="flex flex-wrap items-center justify-between gap-5 text-sm">
          <p>Created with love by Elastic Themes</p>
          <p className="flex flex-wrap items-center gap-3">
            Powered by Webflow <span className="size-1 rounded-full bg-white" />{" "}
            Style Guide <span className="size-1 rounded-full bg-white" />{" "}
            Licensing
          </p>
          {user?.role == "ADMIN" && (
            <Link
              className="flex text-xs hover:underline md:text-sm"
              to="/dashboard"
            >
              Dashboard
            </Link>
          )}
          {user && <Button onClick={handleSingOut}>Sign out</Button>}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const links = [
  {
    name: "Catalog",
    path: "/catalog",
  },
  {
    name: "Delivery",
    path: "/delivery",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contacts",
    path: "/contacts",
  },
];
