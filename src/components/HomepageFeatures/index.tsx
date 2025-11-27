import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { InferDB2 } from './InferDB2';

type FeatureItem = {
  title: string;
  subTitle?: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  Logo: React.ComponentType<React.ComponentProps<'svg'>>;
  size?: number;
  description?: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI native multimodal database',
    Svg: require('@site/static/img/inferdb-1.svg').default,
    Logo: require('@site/static/img/icon-db.svg').default,
    size: 7,
  },
  {
    title: 'Dramatic Cost Reduction',
    subTitle: 'Agent cost on db can be 25-33% of Original',
    Svg: InferDB2,
    Logo: require('@site/static/img/icon-cost.svg').default,
    size: 4,
  },
];

function Feature({title, subTitle, Svg, Logo, size}: FeatureItem) {
  return (
    <div className={styles.featureBlock} style={{flexGrow: size}}>
      <div className={styles.featureBlockTitle}>
        <Logo className={styles.featureBlockTitleLogo} role="img" />
        {title}
      </div>
      {subTitle && <div className={styles.featureBlockSubtitle}>{subTitle}</div>}
      <div className="text--center">
        <Svg className={subTitle ? styles.featureSvgWithSubtitle : styles.featureSvg} role="img" />
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
