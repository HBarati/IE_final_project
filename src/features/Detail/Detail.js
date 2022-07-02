import React from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { getFetch } from '../../utils/fetch';
import { useParams } from 'react-router-dom';
import Layout from '../Layout';
import './Detail.scss';
import { numberWithCommas } from '../../utils/number';

const Detail = () => {
  const theme = useSelector((state) => state.theme.value);
  const { id } = useParams();

  const { data } = useQuery(['detail', id], () => getFetch('http://localhost:8080/detail/' + id));

  return (
    <Layout header>
      <div className="detail" theme={theme}>
        {data && (
          <>
            <img src={data.image.large} alt={data.name} />
            <h1>{data.name}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.description.en }} />
            <p>
              Current Price: <span>$ {numberWithCommas(data.price.toFixed(0))}</span>
            </p>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Detail;
