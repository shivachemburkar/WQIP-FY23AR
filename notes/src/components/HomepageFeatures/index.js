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
    <section className={styles.features}>
      <div className="container">
        <div className="row">
        <img src={imgMap} alt="Hydrologic Areas" useMap="#image-map" />
        <map className='image-map' name="image-map">
          <area target="" alt="Loma Alta" title="Loma Alta" href="/docs/wqipgoals/HydrologicAreas/Loma%20Alta%20Water%20Quality%20Goals" coords="80,121,244,170" shape="rect" />
          <area target="" alt="Buena Vista" title="Buena Vista" href="/docs/wqipgoals/HydrologicAreas/buena-vista" coords="121,211,376,182" shape="rect" />
          <area target="" alt="Agua Hedionda" title="Agua Hedionda" href="/docs/wqipgoals/HydrologicAreas/agua-hedionda" coords="418,232,195,324" shape="rect" />
          <area target="" alt="Encinas" title="Encinas" href="/docs/wqipgoals/HydrologicAreas/encinas" coords="149,348,270,380" shape="rect" />
          <area target="" alt="San Marcos" title="San Marcos" href="/docs/category/san-marcos-1" coords="441,336,284,453" shape="rect" />
          <area target="" alt="Escondido" title="Escondido" href="/docs/wqipgoals/HydrologicAreas/escondido-creek" coords="463,523,772,358" shape="rect" />
        </map>
        </div>
      </div>
    </section>
  );
}
