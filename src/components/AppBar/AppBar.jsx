// import { NavLink } from "react-router-dom";
// import clsx from "clsx";
import s from "./AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
// import { logoutThunk } from "../../redux/auth/operations";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const dispatch = useDispatch();

  return (
    <header className={s.header}>
      {/* <h2>Phonebook</h2> */}

      <Navigation />
      <h3>{user.email}</h3>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}

    </header>
  );
};

export default AppBar;