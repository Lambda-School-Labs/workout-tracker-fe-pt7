import React, { useState } from 'react';
import { axiosWithAuth } from '../authentication/axiosWithAuth';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Container, LogoSection, Logo, SubText } from './style';

export default function Register(props) {
  const { register, errors } = useForm();

  const [user, getUser] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleChanges = (e) => {
    getUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post('/api/register', user)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        useHistory.push('/login');
        console.log('register info form submitted');
      })
      .catch((err) => {
        localStorage.removeItem('token');
        console.log('Invalid!!!', err);
      });
  };

  return (
    <>
      <Container>
        <LogoSection>
          <Logo>FitTracker</Logo>
          <SubText>Register</SubText>
        </LogoSection>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="register-form">
            <label>
              Email:&nbsp;
              <input
                type="text"
                placeholder="johndoe@gmail.com"
                name="email"
                onChange={handleChanges}
                value={user.email}
                className="register-field"
                ref={register({ required: true })}
              />
            </label>
            {errors.email && <p>This is required</p>}
            <label>
              Username:&nbsp;
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChanges}
                value={user.username}
                className="register-field"
                ref={register({ required: true })}
              />
            </label>
            {errors.username && <p>This is required</p>}
            <label>
              Password:&nbsp;
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChanges}
                value={user.password}
                className="register-field"
                ref={register({ required: true, minLength: 8 })}
              />
            </label>
            {errors.password && errors.password.type === 'required' && (
              <p>This is required</p>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <p>This field requires a minimum length of 8 characters</p>
            )}
            <p>
              Already have an account? Sign in <Link to="/login">here</Link>
            </p>
            <input type="submit" className="button" />
          </form>
        </div>
      </Container>
    </>
  );
}
