import React from 'react';
import LoginForm from './LoginForm';
import { css } from 'linaria';

const wrapper = css`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;
const Login = () => {
  return (
    <div className={wrapper}>
      <LoginForm />
    </div>
  );
};

export default Login;
