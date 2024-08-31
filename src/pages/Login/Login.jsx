import { Form, Field, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { loginThunk } from "../../redux/auth/operations";
import s from "./Login.module.css";

const Login = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    console.log(values);
    options.resetForm();
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div className={s.login}>
      <h1>Entrance</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.contactForm}>
          <Field
            className={s.input}
            name="email"
            placeholder="Enter your email"
          />
          <Field
            className={s.input}
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <button type="submit">Login</button>
          <p>
            You do not have account?
            <Link className={s.link} to="/register">
              {" "}
              Sign up!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default Login;