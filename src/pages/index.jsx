import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Reading" keywords={['daniel martinez', 'blog', 'technology']} />
    <h1 className="text-6xl text-gray-700">Trust the Exponential</h1>
    <h2 className="text-5xl text-gray-700">The benefit comes at the end</h2>
    <h3 className="text-4xl text-gray-700">No hurry, no pause</h3>
  </Layout>
);

export default IndexPage;
