import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import imgMap from '../../static/img/CWMA.png';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function RiverElement() {
  return (
    <section className={clsx('NativeApps', styles.Section, styles.light)} style={{ backgroundImage: `url(${useBaseUrl('/img/river.jpg')})` }}>
      <div className={styles.TwoColumns + ' reverse'}>
        <div className={styles.column + ' first right'}>
          <h2>Read up on the Water Quality health in the different hydrologic areas of the Carlsbad Watershed Management Area</h2>
          <p>Your introductory text here</p>
        </div>
        <div className={styles.column + ' last left'}>
          <img alt="River View" src={useBaseUrl('img/homepage/river.png')} />
        </div>
      </div>
    </section>
  );
}


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', 'hero--primary', styles.heroBanner, 'HeaderHero')}>
      {/* Container to manage the layout inside the header, not the header itself */}
      <div className="container">
        <div className="header-content"> {/* Additional div for better control */}
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/Carlsbad-Watershed-Management-Area/WQIP-Report/Introduction">
              Let's Get Started!
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}




// ⏱️
export default function Home() {
  return (
    <Layout
      title={`CWMA Water Quality FY23`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <RiverElement />
      </main>
    </Layout>
  );
}
