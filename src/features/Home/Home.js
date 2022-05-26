import React from 'react';
import './Home.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as themeAction from '../../store/theme';
import Layout from '../Layout';
import { getLastSearches } from '../../utils/localStorage';
import { numberWithCommas } from '../../utils/number';

const Home = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const toggle = () => dispatch(themeAction.toggle());
  const lastSearches = getLastSearches();

  return (
    <Layout>
      <div className="home" theme={theme}>
        <header>
          <button onClick={toggle} theme={theme}>
            Change Theme
          </button>
        </header>
        <div className="home-title">
          <h1>
            Search & Buy <span className="crypto">Crypto</span>
          </h1>
          <p>Shahid Beheshti University</p>
          <p>IE Final Project</p>
          <Link to="/search">search more</Link>
        </div>
        <div className="last-searches">
          {lastSearches.map((coin) => (
            <div key={coin.name}>
              <img src={coin.image} alt={coin.name} />
              <div>
                <p>$ {numberWithCommas(coin.current_price.toFixed(1))}</p>
                <p>{coin.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
