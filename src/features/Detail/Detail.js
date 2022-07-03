import React from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { getFetch } from '../../utils/fetch';
import { useParams } from 'react-router-dom';
import Layout from '../Layout';
import './Detail.scss';
import { numberWithCommas } from '../../utils/number';
import image from '../../assets/laptop.webp';
const Detail = () => {
  const theme = useSelector((state) => state.theme.value);
  const { id } = useParams();

  const { data } = useQuery(['detail', id], () =>
    // eslint-disable-next-line no-constant-condition
    false
      ? getFetch('http://localhost:8080/detail/' + id)
      : {
          name: 'Surface laptop 4',
          description:
            '11e generatie Intel® Core™ i5-1135G7 (4 cores, 8 MB cache, vanaf 2,4 GHz, tot 4,2 GHz)',
          image,
          price: 1.297
        }
  );

  return (
    <Layout header>
      <div className="detail" theme={theme}>
        {data && (
          <>
            <img src={data.image} alt={data.name} />
            <h1>{data.name}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
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
