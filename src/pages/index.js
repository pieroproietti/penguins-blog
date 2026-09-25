import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          &nbsp;
          <Link
            className="button button--secondary button--lg"
            to="/gui/">
            Quickstart GUI
          </Link>
          &nbsp;
          <Link
            className="button button--secondary button--lg"
            to="/penguins-eggs/user-manual/quickstart">
            Quickstart CLI
          </Link>
          &nbsp;
          <Link
            className="button button--secondary button--lg"
            to="https://penguins-eggs.net/basket/">
            Downloads
          </Link>
          <Link
            className={clsx('button button--secondary button--lg', styles.donateButton)}
            to="/penguins-eggs-legacy/donate">
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="On the road of Remastersys, Refracta, Systemback and father Knoppix!">
      <HomepageHeader />
      <main>
        <div className={clsx('container', styles.headerImageContainer)}>
          <img
            className={styles.headerImage}
            src={useBaseUrl('/img/penguins-header.png')}
            alt="penguins' eggs — penguins representing Linux distributions working together to remaster their systems"
            width="2172"
            height="724"
          />
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
