import { Form, Field, Formik } from "formik";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import s from "./Register.module.css";

const Register = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    name: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
    options.resetForm();
  };
  return (
    <div className={s.register}>
      <h1>Registration</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.contactForm}>
          <Field
            className={s.input}
            name="name"
            placeholder="Enter your name"
          />
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
          <button type="submit">Register</button>

          <p>
            You already have account?
            <Link className={s.link} to="/login">
              {" "}
              Sign in
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default Register;