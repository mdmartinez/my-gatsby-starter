import React from 'react';
import PropTypes from 'prop-types';
import useSiteMetadata from '../../hooks/use-site-metadata';
import Header from '../header';
import { grid, content } from './layout.module.css';

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();

  return (
    <>
      <div className={grid}>
        <Header siteTitle={title} />
        <main className={content}>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
