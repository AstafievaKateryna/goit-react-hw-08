import { Route, Routes } from "react-router-dom";
// import ContactsPage from "../pages/ContactsPage/ContactsPage";
import Layout from "./Layout";
// import Login from "../pages/Login/Login";
// import Register from "../pages/Register/Register";
// import Home from "../pages/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { getMeThunk } from "../redux/auth/operations";
import { PrivateRoute } from "../Routes/PrivateRoute";
import { PublicRoute } from "../Routes/PublicRoute";
import { selectIsRefreshing } from "../redux/auth/selectors";
import Loader from "./Loader/Loader";
import NotFound from "../pages/NotFound/NotFound";

const Home = lazy(() => import("../pages/Home/Home"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Register/Register"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(getMeThunk());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;