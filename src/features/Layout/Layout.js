import React from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';
import { useSelector, useDispatch } from 'react-redux';
import * as themeAction from '../../store/theme';

const Layout = ({ children, header }) => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const toggle = () => dispatch(themeAction.toggle());

  return (
    <div className="layout" theme={theme}>
      {header && (
        <header theme={theme}>
          <h1>IE Final Project</h1>
          <button onClick={toggle}>Change Theme</button>
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
