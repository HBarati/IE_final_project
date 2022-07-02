import React, { useState } from 'react';
import Layout from '../Layout';
import './Search.scss';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { numberWithCommas } from '../../utils/number';
import { Link, useNavigate } from 'react-router-dom';
import { getFetch } from '../../utils/fetch';
import logo from '../../assets/torob_logo.svg';

const Search = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.value);
  const [ids, setIds] = useState('');
  const { data = [] } = useQuery(['search', ids], () =>
    getFetch('http://localhost:8080/search/' + ids)
  );

  const navigateToDetail = (id) => () => navigate(`/detail/${id.toLowerCase()}`);

  return (
    <Layout header>
      <div className="search">
        <header>
          <h1>
            <img src={logo} alt="torob" />
            Search Commodity
          </h1>
          <Link to={'/category'}>Categories</Link>
        </header>
        <main theme={theme}>
          <input
            theme={theme}
            type="text"
            placeholder="Search..."
            value={ids}
            onChange={(event) => setIds(event.target.value)}
          />
          <table>
            <thead>
              <tr>
                <th>Commodity</th>
                <th>Price</th>
                <th>Description</th>
                <th>Vendor (Rate)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((good) => (
                <tr key={good.id} theme={theme} onClick={navigateToDetail(good.name)}>
                  <td className="data-name">
                    <div>
                      <p>{good.name}</p>
                    </div>
                  </td>
                  <td>$ {numberWithCommas(good.price.toFixed(2))}</td>
                  <td>{numberWithCommas(good.description)}%</td>
                  <td>{good.vendor}</td>
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
