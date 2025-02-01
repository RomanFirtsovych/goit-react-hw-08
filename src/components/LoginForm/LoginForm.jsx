import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import styles from "./LoginForm.module.css";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label>Email</label>
        <Field type="email" name="email" className={styles.input} />
        <ErrorMessage name="email" component="div" className={styles.error} />

        <label>Password</label>
        <Field type="password" name="password" className={styles.input} />
        <ErrorMessage name="password" component="div" className={styles.error} />

        <button type="submit" className={styles.button}>Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
