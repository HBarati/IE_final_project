import React from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <div className="layout" theme={theme}>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
