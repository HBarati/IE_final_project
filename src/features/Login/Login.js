import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import visibilityIcon from '../../assets/visibility.svg';
import visibilityOffIcon from '../../assets/visibility-off.svg';
import { postFetch } from '../../utils/fetch';
import Layout from '../Layout';
import './Login.scss';

const Login = () => {
  const theme = useSelector((state) => state.theme.value);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const { mutateAsync } = useMutation(() =>
    postFetch('http://localhost:8080/login', { username, password })
  );

  return (
    <Layout header>
      <div className="login" theme={theme}>
        <div className="login-inner">
          <label htmlFor="username">Username:</label>
          <div>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <label htmlFor="password">Password:</label>
          <div>
            <input
              id="password"
              type={visible ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={visible ? visibilityOffIcon : visibilityIcon}
              alt=""
              onClick={() => setVisible((prev) => !prev)}
            />
          </div>
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
