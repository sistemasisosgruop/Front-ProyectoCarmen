import { Link, useLocation } from "react-router-dom";

interface Props {
  href: string;
  label: string;
  icon: JSX.Element;
}

const NavLink = ({ href, label, icon }: Props): JSX.Element => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <Link
      to={href}
      className={`w-full text-dark font-bold px-4 py-3 rounded-xl flex justify-start items-center gap-2 ${
        href === pathname ? "bg-orange text-white" : ""
      } hover:bg-orange hover:text-white transition-colors duration-300`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default NavLink;
