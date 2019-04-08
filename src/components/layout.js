/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import Header from './header';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <Fragment>
      <Header siteTitle={title} />
      <div className={styles.container}>
        <main>{children}</main>
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>I'm a button!</button>
        </div>
        <footer>© {new Date().getFullYear()}, Built by Dan</footer>
      </div>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
