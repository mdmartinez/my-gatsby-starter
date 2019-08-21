import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { header } from './header.module.css';

const Header = ({ siteTitle }) => (
  <header className={header}>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
