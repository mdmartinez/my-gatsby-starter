import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { header, container, link } from './header.module.css';

const Header = ({ siteTitle }) => (
  <header className={header}>
    <div className={container}>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
