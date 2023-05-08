import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Arch',
    Svg: require('@site/static/img/arch.svg').default,
    description: (
      <>
        Adding Arch was laborious, but it was possible, because the 
        project started and evolved to be as universal as possible.
        <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/arch/">&nbsp;download</a>
      </>
    ),
  },
  {
    title: 'Debian',
    Svg: require('@site/static/img/debian.svg').default,
    description: (
      <>
        Penguins' eggs started on Debian in 2017, it still supports buster
        in addition to bullseye and - still in development - bookworm.
        <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/debian/">&nbsp;download</a>
      </>
    ),
  },
  {
    title: 'Devuan',
    Svg: require('@site/static/img/devuan.svg').default,
    description: (
      <>
        Eggs support Devuan beowulf, chimaera and daedalus. 
        <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/devuan/">&nbsp;download</a>
      </>
    ),
  },
  {
    title: 'Ubuntu',
    Svg: require('@site/static/img/ubuntu.svg').default,
    description: (
      <>
        Ubuntu is full supported: bionic, focal, jammy and lunar. 
        <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/ubuntu/">&nbsp;download</a>
      </>
    ),
  },
  {
    title: 'Manjaro',
    Svg: require('@site/static/img/manjaro.svg').default,
    description: (
      <>
        Eggs is part of communty of Manjaro.
        <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/manjaro/">&nbsp;download</a>
      </>
    ),
  },
  {
    title: 'Linuxmint',
    Svg: require('@site/static/img/linuxmint.svg').default,
    description: (
      <>
        Linuxmint, KDE Neon and virtually every Debian, Devuan and Ubuntu derivative are supported. 
        <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/linuxmint/">&nbsp;download</a>
      </>
    ),
  },
  {
    title: 'EndeavourOS',
    Svg: require('@site/static/img/endeavouros.svg').default,
    description: (
      <>
        EndeavourOS, RebornOS and others Arch derivative are supported too. 
        <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/endeavourOS/">download&nbsp;</a>
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
