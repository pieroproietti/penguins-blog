import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Arch',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Adding Arch was laborious, but it was possible because the 
        project started and evolved to be as universal as possible.
      </>
    ),
  },
  {
    title: 'Debian',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Penguins' eggs started with Debian buster back in 2017, it still supports 
        buster in addition to bullseye and - still in develoment - bookworm.
      </>
    ),
  },
  {
    title: 'Devuan',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Eggs support Devuan beowulf, chimaera and daedalus.
      </>
    ),
  },
  {
    title: 'Manjaro',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Eggs is part of communty of Manjaro.
      </>
    ),
  },
  {
    title: 'Ubuntu',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Ubuntu is full supported: bionic, focal and jammy.
      </>
    ),
  },
  {
    title: 'Others',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Virtually every Debian, Devuan and Ubuntu derivative is supported. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
