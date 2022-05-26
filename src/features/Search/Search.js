import React, { useState } from 'react';
import Layout from '../Layout';
import './Search.scss';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { nFormatter, numberWithCommas } from '../../utils/number';
import { useNavigate } from 'react-router-dom';
import { setLastSearches } from '../../utils/localStorage';
import { getFetch } from '../../utils/fetch';

const Search = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.value);
  const [ids, setIds] = useState('');
  const { data = [] } = useQuery(
    ['search-market', ids],
    () =>
      getFetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&ids=' +
          ids
      ),
    {
      onSuccess: (response) => setLastSearches(response)
    }
  );

  const navigateToDetail = (id) => () => navigate(`/detail/${id}`);

  return (
    <Layout header>
      <div className="search">
        <header>
          <h1>Search Coin</h1>
          <a>Get Information From Here</a>
        </header>
        <main theme={theme}>
          <header>Cryptocurrency Prices by Market Cap</header>
          <input
            theme={theme}
            type="text"
            placeholder="Search For a Crypto Currency..."
            value={ids}
            onChange={(event) => setIds(event.target.value)}
          />
          <table>
            <thead>
              <tr>
                <th>Coin</th>
                <th>Price</th>
                <th>24th Change</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {data.map((coin) => (
                <tr key={coin.symbol} theme={theme} onClick={navigateToDetail(coin.name)}>
                  <td className="data-name">
                    <img src={coin.image} alt={coin.name} />
                    <div>
                      <p>{coin.symbol}</p>
                      <p>{coin.name}</p>
                    </div>
                  </td>
                  <td>$ {numberWithCommas(coin.current_price.toFixed(2))}</td>
                  <td
                    className={`data-price-change ${
                      coin.price_change_percentage_24h < 0 ? ' negative' : ''
                    }`}>
                    {numberWithCommas(coin.price_change_percentage_24h.toFixed(2))}%
                  </td>
                  <td>{numberWithCommas(nFormatter(coin.market_cap))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </Layout>
  );
};

export default Search;
