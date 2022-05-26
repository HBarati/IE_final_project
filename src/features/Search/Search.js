import React from 'react';
import Layout from '../Layout';
import './Search.scss';
import { useSelector } from 'react-redux';

const Search = () => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <Layout header>
      <div className="search">
        <header>
          <h1>Search Coin</h1>
          <a>Get Information From Here</a>
        </header>
        <main theme={theme}>
          <header>Cryptocurrency Prices by Market Cap</header>
          <input theme={theme} type="text" placeholder="Search For a Crypto Currency..." />
          <table>
            <thead>
              <tr>
                <th>Coin</th>
                <th />
                <th>Price</th>
                <th>24th Change</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </main>
      </div>
    </Layout>
  );
};

export default Search;
