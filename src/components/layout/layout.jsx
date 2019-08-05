import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useSiteMetadata from '../../hooks/use-site-metadata';
import Header from '../header';
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
          <button
            className="border-gray-100 shadow text-xl"
            onClick={() => setCount(count + 1)}
          >
            Stock button
          </button>
        </div>
        <footer className="text-blue-200">
          © {new Date().getFullYear()} , Built by Daniel
        </footer>
      </div>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
