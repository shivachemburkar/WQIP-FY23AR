import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import imgMap from '../../../static/img/CWMA.png'


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={clsx(styles.features, styles.lightBackground)}>
      <div className="container">
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Carlsbad-Watershed-Management-Area/WQIP-Report/Introduction">
            Dive Deeper into the Data
          </Link>
        </div>
      </div>
    </section>
  );
}
