import React from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { getFetch } from '../../utils/fetch';
import { useParams } from 'react-router-dom';
import Layout from '../Layout';
import './Detail.scss';
import { nFormatter, numberWithCommas } from '../../utils/number';

const Detail = () => {
  const theme = useSelector((state) => state.theme.value);
  const { id } = useParams();

  const { data: coin } = useQuery(['coin-detail', id], () =>
    getFetch('https://api.coingecko.com/api/v3/coins/' + id)
  );

  return (
    <Layout header>
      <div className="detail" theme={theme}>
        {coin && (
          <>
            <img src={coin.image.large} alt={coin.name} />
            <h1>{coin.name}</h1>
            <div dangerouslySetInnerHTML={{ __html: coin.description.en }} />
            <p>
              Rank: <span>{coin.market_cap_rank}</span>
            </p>
            <p>
              Current Price:{' '}
              <span>$ {numberWithCommas(coin.market_data.current_price.usd.toFixed(0))}</span>
            </p>
            <p>
              Market Cap:{' '}
              <span>
                $ {numberWithCommas(nFormatter(coin.market_data.market_cap.usd.toFixed(0)))}
              </span>
            </p>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Detail;
