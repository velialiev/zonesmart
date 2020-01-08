import React, { useState } from 'react';
import { useFormik } from 'formik';
import AuthController from '../../controllers/auth.controller';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import styles from './LoginPage.module.scss';
import { Redirect } from 'react-router';

const LoginPage = () => {
  const [redirectTo, setRedirectTo] = useState();
  const loginForm = useFormik({
    initialValues: {
      email: 'admin@zonesmart.ru',
      password: '4815162342',
    },
    onSubmit: async values => {
      const response = await AuthController.createJWT(values.email, values.password);
      AuthController.setToken(response.access);
      AuthController.setRefresh(response.refresh);
      setRedirectTo('/category-selection');
    }
  });

  if (redirectTo) {
    return <Redirect to={redirectTo} />
  }

  return (
    <>
      <Container maxWidth="md">
        <div className="center-wrap">
          <div className={'box ' + styles['login-page-box']}>
            <h1 className={styles['title']}>Login</h1>
            <form onSubmit={loginForm.handleSubmit}>
              <TextField className="mb-20"
                         type="email"
                         label="Email"
                         id="email"
                         name="email"
                         onChange={loginForm.handleChange}
                         value={loginForm.values.email}
              />
              <TextField className="mb-20"
                         type="password"
                         label="Password"
                         id="password"
                         name="password"
                         onChange={loginForm.handleChange}
                         value={loginForm.values.password}
              />

              <Button className={styles['proceed-btn']} color="primary" type="submit">Proceed</Button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
