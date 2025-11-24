import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  Logo: React.ComponentType<React.ComponentProps<'svg'>>;
  description?: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI native multimodal database',
    Svg: require('@site/static/img/inferdb-1.svg').default,
    Logo: require('@site/static/img/icon-db.svg').default,
  },
  {
    title: 'Dramatic Cost Reduction',
    Svg: require('@site/static/img/inferdb-2.svg').default,
    Logo: require('@site/static/img/icon-cost.svg').default,
  },
];

function Feature({title, Svg, Logo}: FeatureItem) {
  return (
    <div className={styles.featureBlock}>
      <div className={styles.featureBlockTitle}>
        <Logo className={styles.featureBlockTitleLogo} role="img" />
        {title}
      </div>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
