import React from 'react';
import './Home.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as themeAction from '../../store/theme';
import Layout from '../Layout';

const Home = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const toggle = () => dispatch(themeAction.toggle());
  return (
    <Layout>
      <div className="container" theme={theme}>
        <header>
          <button onClick={toggle} theme={theme}>
            Change Theme
          </button>
        </header>
        <div>
          <h1>
            Search & Buy <span className="crypto">Crypto</span>
          </h1>
          <p>Shahid Beheshti University</p>
          <p>IE Final Project</p>
          <Link to="/search">search more</Link>
        </div>
        <div>{/*todo*/}</div>
      </div>
    </Layout>
  );
};

export default Home;
