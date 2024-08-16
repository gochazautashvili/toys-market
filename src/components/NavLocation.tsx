import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavLocation = () => {
  const { pathname } = useLocation();

  return (
    <div className="mb-10 mt-4 flex h-9 items-center gap-2 rounded-[16px] border border-[#e5e5e5] px-5 text-xs text-gray-500">
      <Link to="/">Home</Link> <ArrowRight className="h-3" />{" "}
      <Link to={pathname} className="capitalize">
        {pathname.split("/")[1]}
      </Link>
    </div>
  );
};

export default NavLocation;
