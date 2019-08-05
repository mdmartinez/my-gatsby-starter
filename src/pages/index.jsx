import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['daniel martinez', 'blog', 'technology']} />
    <h1 className="text-2xl">Write Something Great</h1>
    <p className="first">Another great site is waiting to begin.</p>
    <p>Time to begin building.</p>
    <div
      className="bg-blue-700"
      style={{ maxWidth: '300px', marginBottom: '1.45rem' }}
    >
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
  </Layout>
);

export default IndexPage;
