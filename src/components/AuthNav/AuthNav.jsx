import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import clsx from "clsx";

const createNavLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.isActive);
};

const AuthNav = () => {
  return (
    <nav className={s.list}>
      <NavLink to="/register" className={createNavLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={createNavLinkClass}>
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;