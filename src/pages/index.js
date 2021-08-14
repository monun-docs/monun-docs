import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <center>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Home Docs/Index">
            Home Docs
          </Link>
          {' '}
          <Link
            className="button button--secondary button--lg"
            to="/docs/Dev Docs/Index">
            Dev Docs
          </Link>
          {' '}
          <Link
            className="button button--secondary button--lg"
            to="/docs/Usage Docs/Index">
            Usage Docs
          </Link>
          </center>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Main Page`}
      description="Monun Docs Main Page">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
