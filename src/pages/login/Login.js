import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { login } from '../../data/data';

const LoginPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: (values) => {
      if (login(values.email, values.password)) {
        navigate('/');
      }
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required('Required'),
      password: Yup.string().required('Required'),
    }),
  });

  return (
    <section className='login'>
      <div className='login-content'>
        <img
          className='login-content-image'
          src='Asset 16@4x.png'
          alt='Login Little Lemon logo'
        />
        <form className='login-content-form' onSubmit={formik.handleSubmit}>
          <h1 className='login-content-form-title'>Log in</h1>
          <p className='login-content-form-subtitle'>
            Enjoy all the benefits of being a Little Lemoner.
          </p>
          <div className='login-content-form-fields'>
            <input
              id='email'
              name='email'
              type='email'
              className='login-content-form-field'
              placeholder='try: user@test.com'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <input
              id='password'
              name='password'
              type='password'
              className='login-content-form-field'
              placeholder='try: user'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <input
              className='login-content-form-submit'
              type='submit'
              value='Log in'
              disabled={formik.values.password.length === 0}
            />
          </div>
        </form>

        <p className='login-content-register-label'>
          Don&quot;t have an account?{' '}
          <a className='login-content-register' href='#'>
            Register now
          </a>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
