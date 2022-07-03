import React from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as themeAction from '../../store/theme';
import logo from '../../assets/torob_logo.svg';

const Layout = ({ children, header }) => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const toggle = () => dispatch(themeAction.toggle());

  return (
    <div className="layout" theme={theme}>
      {header && (
        <header theme={theme}>
          <Link to="/">
            <img src={logo} alt="torob" />
            Torob Project
          </Link>
          <button onClick={toggle}>Change Theme</button>
          <Link to="/">Logout</Link>
        </header>
      )}
      <div>{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  header: PropTypes.bool
};

export default Layout;
