import clsx from "clsx";
import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const createNavLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.isActive);
};

const Navigation = () => {
  const isLoggedin = useSelector(selectIsLoggedIn);
  return (
    <nav className={s.list}>
      <NavLink to="/" className={createNavLinkClass}>
        Home
      </NavLink>
      {isLoggedin && (
        <NavLink to="/contacts" className={createNavLinkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;