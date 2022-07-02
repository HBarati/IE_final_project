import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import { postFetch } from '../../utils/fetch';
import Layout from '../Layout';
import './Login.scss';

const Login = () => {
  const theme = useSelector((state) => state.theme.value);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { mutateAsync } = useMutation(() =>
    postFetch('http://localhost:8080/login', { username, password })
  );

  return (
    <Layout header>
      <div className="login" theme={theme}>
        <div className="login-inner">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            theme={theme}
            onClick={async () => {
              if (username !== 'admin' && password !== 'admin') {
                await mutateAsync();
              }
              navigate('/home');
            }}>
            Submit
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
