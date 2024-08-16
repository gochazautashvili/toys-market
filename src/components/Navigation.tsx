import { Link } from "react-router-dom";

interface Props {
  onClose?: () => void;
  className?: string;
}

const Navigation = ({ className, onClose }: Props) => {
  return (
    <div className={className}>
      {links.map((link) => {
        return (
          <Link
            onClick={onClose}
            className="flex border-b border-t border-[#e5e5e5] px-6 py-4 hover:underline lg:border-0 lg:p-0"
            key={link.path}
            to={link.path}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;

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
