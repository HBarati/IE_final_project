import React from 'react';
import './Home.scss';
import { useSelector } from 'react-redux';
import Layout from '../Layout';

const Home = () => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <Layout>
      <div className="container" theme={theme}>
        <div className="header">
          <h1>
            Search & Buy <span className="crypto">Crypto</span>
          </h1>
          <p>Shahid Beheshti University</p>
          <p>IE Final Project</p>
        </div>
        <div></div>
      </div>
    </Layout>
  );
};

export default Home;
