import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Reading" keywords={['daniel martinez', 'blog', 'technology']} />
    <h1 className="text-gray-700">Trust the Exponential</h1>
    <h2 className="text-gray-600">The benefit comes at the end</h2>
    <p className="text-gray-600">No hurry, no pause</p>
  </Layout>
);

export default IndexPage;
