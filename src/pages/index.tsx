import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageDetails from '@site/src/components/HomepageDetails';
import Heading from '@theme/Heading';
import { agentDetailList } from '@site/src/data/agentDetails';
import { architectureDetailList } from '@site/src/data/architectureDetails';

import styles from './index.module.css';
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.homepage)}>
      <div className='container'>
        <Heading as='h1' className={styles.homepageTitle}>
          AI Native <span className={styles.homepageTitleStrong}>Multimodal</span> Database
        </Heading>
        <p className={styles.homepageDescription}>
          InferDB, a multimodal AI inference database, is specifically designed for AI applications.
          It enables vectorization, storage, and efficient indexing of unstructured data, while
          supporting multiple query methods such as similarity search, full-text search, and
          metadata filtering. Compatible with Python and client access, it allows developers to
          quickly integrate and invoke its capabilities.
        </p>
        <div className={styles.homepageButtons}>
          <Link className='button button--primary button--lg' to='/docs/整体介绍/介绍'>
            Quick Start
          </Link>
          <Link className='button button--secondary button--lg' to='/docs/整体介绍/介绍'>
            Github
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.customLayout}>
      <Layout title={`${siteConfig.title}`}>
        <HomepageHeader />
        <main className={styles.mainContent}>
          <HomepageFeatures />
          <HomepageDetails
            title='Why AI Agents Require Multiple Databases​'
            subTitle='Agent Context Type:'
            detailList={agentDetailList}
          />
          <HomepageDetails
            title='Memory-Centric Storage Engine Architecture​'
            detailList={architectureDetailList}
            imageAlign='left'
          />
        </main>
      </Layout>
    </div>
  );
}
