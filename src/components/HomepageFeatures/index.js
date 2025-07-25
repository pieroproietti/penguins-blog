import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AlmaLinux',
    Svg: require('@site/static/img/almalinux.svg').default,
    description: (
      <>
        <a href="/almalinux">&nbsp;AlmaLinux,&nbsp;</a>a RHEL clone
      </>
    ),
  },
  {
    title: 'Alpine Linux',
    Svg: require('@site/static/img/alpine.svg').default,
    description: (
      <>
        <a href="/alpine">&nbsp;Alpine&nbsp;</a> a security-oriented, lightweight Linux distribution based on musl, libc, and busybox.
      </>
    ),
  },

  {
    title: 'Arch Linux',
    Svg: require('@site/static/img/arch.svg').default,
    description: (
      <>
        Adding<a href="/archlinux">&nbsp;Arch Linux&nbsp;</a>
        was laborious, but it was possible, because the project started and evolved to be as universal as possible.
      </>
    ),
  },
  {
    title: 'Debian',
    Svg: require('@site/static/img/debian.svg').default,
    description: (
      <>
        Penguins' eggs started on <a href="/debian">Debian</a> in 2017, it still supports Jessie, Stretch, Buster, Bullseye,
        <a href="/debian/bookworm">&nbsp;Bookworm&nbsp;</a>
        and<a href="/debian/trixie">&nbsp;Trixie&nbsp;</a>.
      </>
    ),
  },
  {
    title: 'Devuan',
    Svg: require('@site/static/img/devuan.svg').default,
    description: (
      <>
        <a href="/devuan/">Devuan</a>:&nbsp;
        <a href="/devuan/daedalus/">daedalus</a>,
        <a href="/devuan/excalibur/">&nbsp;excalibur</a>
      </>
    ),
  },
  {
    title: 'Fedora',
    Svg: require('@site/static/img/fedora.svg').default,
    description: (
      <>
      <a href="/fedora">Fedora 41</a>: It's your Operating System.
      </>
    ),
  },
  {
    title: 'Linux Mint',
    Svg: require('@site/static/img/linuxmint.svg').default,
    description: (
      <>
        <a href="/linuxmint">&nbsp;Linux Mint</a> and virtually every Debian, Devuan and Ubuntu derivatives are supported. 
      </>
    ),
  },
  {
    title: 'Manjaro',
    Svg: require('@site/static/img/manjaro.svg').default,
    description: (
      <>
        Penguins' eggs is part of community repo of <a href="/manjaro">Manjaro</a>.
      </>
    ),
  },
  {
    title: 'openmamba',
    Svg: require('@site/static/img/openmamba.svg').default,
    description: (
      <>
        <a href="/openmamba">openmamba</a> is an operating system based on the Linux kernel but is not a derivative of other distributions.
      </>
    ),
  },
  {
    title: 'openSUSE',
    Svg: require('@site/static/img/opensuse.svg').default,
    description: (
      <>
        <a href="/opensuse">openSUSE</a>, the makers' choice for sysadmins, developers and desktop users.
      </>
    ),
  },
  {
    title: 'Rocky Linux',
    Svg: require('@site/static/img/rocky.svg').default,
    description: (
      <>
        <a href="/rocky">Rocky Linux</a>, a RHEL clone.
      </>
    ),
  },
  {
    title: 'Ubuntu',
    Svg: require('@site/static/img/ubuntu.svg').default,
    description: (
      <>
        <a href="/ubuntu">Ubuntu</a> is fully supported: 
        <a href="/ubuntu/bionic/">&nbsp;bionic</a>,
        <a href="/ubuntu/noble/">&nbsp;noble</a>
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
