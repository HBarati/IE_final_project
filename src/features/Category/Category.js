import React from 'react';
import './Category.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import logo from '../../assets/torob_logo.svg';

const commodities = ['Laptop', 'Mobile', 'Tablet'];

const Category = () => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <Layout header>
      <div className="home" theme={theme}>
        <div className="home-title">
          <h1>
            <img src={logo} alt="torob" />
            Torob
          </h1>
          <p>Shahid Beheshti University</p>
          <p>IE Final Project</p>
        </div>
        <div className="last-searches">
          {commodities.map((commodity) => (
            <Link to={`/detail/${commodity}`} key={commodity}>
              {commodity}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Category;
