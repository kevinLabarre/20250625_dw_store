import { Link, useLocation } from "react-router-dom";

export const HeaderItem = ({ href, children }) => {
  const { pathname } = useLocation();
  return (
    <>
      <Link
        to={href}
        className={`${
          pathname === href && "border-b-2 border-primary font-bold"
        }`}
      >
        {children}
      </Link>
    </>
  );
};
