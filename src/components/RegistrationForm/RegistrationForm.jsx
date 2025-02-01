import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import styles from "./RegistrationForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().min(2, "Must be at least 2 characters").required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(register(values)).unwrap();
      navigate("/contacts");
    } catch (error) {
      alert("Registration failed. Please try again.");
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label>Name</label>
        <Field type="text" name="name" className={styles.input} />
        <ErrorMessage name="name" component="div" className={styles.error} />

        <label>Email</label>
        <Field type="email" name="email" className={styles.input} />
        <ErrorMessage name="email" component="div" className={styles.error} />

        <label>Password</label>
        <Field type="password" name="password" className={styles.input} />
        <ErrorMessage name="password" component="div" className={styles.error} />

        <button type="submit" className={styles.button}>Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
