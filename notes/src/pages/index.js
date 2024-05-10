import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import imgMap from '../../static/img/CWMA.png';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function RiverElement() {
  return (
    <section className="NativeApps Section light" style={{ backgroundImage: `url(${useBaseUrl('img/river.jpg')})` }}>
      <div className="TwoColumns reverse">
        <div className="column first right">
          <div>
            <h2 className="Heading">Read up on the Water Quality health in the different hydrologic areas of the Carlsbad Watershed Management Area</h2>
            <div dangerouslySetInnerHTML={{ __html: "Your introductory text here" }} />
          </div>
        </div>
        <div className="column last left">
          <img alt="Phones" src={useBaseUrl('img/homepage/phones.png')} />
        </div>
      </div>
    </section>
  );
}


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Carlsbad-Watershed-Management-Area/WQIP-Report/Introduction">
            Let's Get Started!
          </Link>
        </div>
      </div>
    </header>
  );
}
// ⏱️
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`CWMA Water Quality FY21/22`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <RiverElement />
      </main>
    </Layout>
  );
}
