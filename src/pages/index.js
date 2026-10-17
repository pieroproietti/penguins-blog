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
          <Link
            className="button button--secondary button--lg"
            title="Quickstart GUI"
            to="/docs/gui">
            GUI
          </Link>
          <Link
            className="button button--secondary button--lg"
            title="Quickstart CLI"
            to="/docs/eggs/quickstart">
            CLI
          </Link>
          <Link
            className="button button--secondary button--lg"
            title="Watch promo video"
            to="https://penguins-eggs.net/video/video_en.mp4">
            Video
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://penguins-eggs.net/basket/">
            Downloads
          </Link>
          <Link
            className={clsx('button button--secondary button--lg', styles.donateButton)}
            to="/docs/donate">
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
        <div className={clsx('container', styles.videoContainer)}>
          <video
            className={styles.promoVideo}
            controls
            preload="metadata">
            <source src={useBaseUrl('/video/video_en.mp4#t=0.1')} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </main>
    </Layout>
  );
}
