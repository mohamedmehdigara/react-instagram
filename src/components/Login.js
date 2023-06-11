import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Login = () => {
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('/api/login', values);
      console.log(response.data); // Assuming the response contains user data or success message

      // Redirect the user to the home page or perform any desired action
      // For example:
      // history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  const validationSchema = Yup.object().shape({
    emailOrUsername: Yup.string().required('Email or username is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <div className="login">
      <h2>Login</h2>
      <Formik
        initialValues={{ emailOrUsername: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="emailOrUsername">Email or Username</label>
            <Field type="text" id="emailOrUsername" name="emailOrUsername" />
            <ErrorMessage name="emailOrUsername" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
