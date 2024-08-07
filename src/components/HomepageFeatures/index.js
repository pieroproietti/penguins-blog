import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Arch',
    Svg: require('@site/static/img/arch.svg').default,
    description: (
      <>
        Adding <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/arch/">&nbsp;Arch&nbsp;</a>
        was laborious, but it was possible, because the project started and evolved to be as universal as possible.
      </>
    ),
  },
  {
    title: 'Debian',
    Svg: require('@site/static/img/debian.svg').default,
    description: (
      <>
        Penguins' eggs started on Debian in 2017, it still supports 
        <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/debian/buster">&nbsp;buster&nbsp;</a>
        in addition to 
        <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/debian/bullseye">&nbsp;bullseye&nbsp;</a>,
        and <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/debian/bookworm">&nbsp;bookworm&nbsp;</a>
      </>
    ),
  },
  {
    title: 'Devuan',
    Svg: require('@site/static/img/devuan.svg').default,
    description: (
      <>
        Eggs support Devuan 
        <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/devuan/beowulf">&nbsp;beowulf</a>, 
        <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/devuan/chimaera">&nbsp;chimaera</a>, and 
        <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/devuan/daedalus">&nbsp;daedalus</a>
      </>
    ),
  },
  {
    title: 'Ubuntu',
    Svg: require('@site/static/img/ubuntu.svg').default,
    description: (
      <>
        Ubuntu is full supported: 
        <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/ubuntu/bionic">&nbsp;bionic</a>,
        <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/ubuntu/focal">&nbsp;focal</a>,
        <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/ubuntu/jammy">&nbsp;jammy</a> and
        <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/ubuntu/lunar">&nbsp;lunar</a>
      </>
    ),
  },
  {
    title: 'Manjaro',
    Svg: require('@site/static/img/manjaro.svg').default,
    description: (
      <>
        Eggs is part of communty of <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/manjaro/">Manjaro</a>.
      </>
    ),
  },
  {
    title: 'Debian derivatives',
    Svg: require('@site/static/img/linuxmint.svg').default,
    description: (
      <>
        <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/linuxmint/">&nbsp;Linuxmint</a>,
        <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/neon/">&nbsp;KDE neon</a>,
        <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/pop-os/">&nbsp;Pop!_OS</a>,
        <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/elementary/">&nbsp;elementary OS&nbsp;</a>
        and virtually every Debian, Devuan and Ubuntu derivatives are supported. 
      </>
    ),
  },
  {
    title: 'Arch derivatives',
    Svg: require('@site/static/img/endeavouros.svg').default,
    description: (
      <>
      <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/endeavourOS/">&nbsp;EndeavourOS</a>,
      <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/garuda/">&nbsp;Garuda</a>,
      <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/rebornos/">&nbsp;RebornOS&nbsp;</a>
      and <a href="https://sourceforge.net/projects/penguins-eggs/files/ISOS/">others</a>.
      </>
    ),
  },
  {
    title: 'fedora',
    Svg: require('@site/static/img/fedora.svg').default,
    description: (
      <>
      <a href="https://github.com/pieroproietti/penguins-eggs/discussions/376">Come in</a> help to bring penguins' eggs to <a href="https://fedoraproject.org/">fedora</a>!
      </>
    ),
  },
  {
    title: 'Alpine Linux',
    Svg: require('@site/static/img/alpine.svg').default,
    description: (
      <>
      <a href="https://github.com/pieroproietti/penguins-eggs/discussions/377">Come in</a> help to bring penguins' eggs to <a href="https://alpinelinux.org/">Alpine Linux</a>!
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
