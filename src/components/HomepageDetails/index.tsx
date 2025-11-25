import React, {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import type { DetailItem } from '@site/src/types/common';

type DetailsProps = {
  title: string;
  subTitle?: string;
  detailList: DetailItem[],
  imageAlign?: 'left' | 'right';
};

export default function HomepageDetails({ title, subTitle, detailList, imageAlign = 'right' }: DetailsProps): ReactNode {
  const [activeTheme, setActiveTheme] = React.useState(detailList?.[0]?.id || '');

  const handleThemeChange = (themeId: string) => {
    setActiveTheme(themeId);
  };

  const currentDetail = React.useMemo(() => 
    detailList.find(detail => detail.id === activeTheme), 
    [activeTheme]
  );

  return (
    <section className={styles.homepageDetails}>
      <Heading as="h2" className={styles.title}>
        {title}
      </Heading>
      
      {subTitle ? <div className={styles.buttonTitle}>{subTitle}</div> : null}
      {detailList && detailList.length > 0 && (
        <div className={styles.buttonContainer}>
          {detailList.map((detail) => (
          <button
            key={detail.id}
            className={clsx(
              styles.themeButton,
              activeTheme === detail.id && styles.activeTheme
            )}
            onClick={() => handleThemeChange(detail.id)}
          >
            {detail.id}
          </button>
        ))}
        </div>
      )}

      <div className={clsx(styles.contentContainer, imageAlign === 'left' && styles.contentContainerLeft)}>
        <div className={styles.textContent}>
          <h3 className={styles.contentTitle}>
            {currentDetail?.title}
          </h3>
          {currentDetail?.description && (
            <p className={styles.contentDescription}>
              {currentDetail.description}
            </p>
          )}
          {currentDetail?.points && currentDetail.points.length > 0 && (
            <ul className={styles.contentPoints}>
              {currentDetail.points.map((point, index) => (
                <li key={index} className={styles.contentPoint}>{point}</li>
              ))}
            </ul>
          )}
          {currentDetail?.solutions && currentDetail.solutions.length > 0 && (
            <div className={styles.contentSolution}>
              Solutions:
              {currentDetail.solutions.map((solution, index) => (
                <React.Fragment key={solution}>
                  <div className={styles.contentSolutionBlock}>{solution}</div>
                  {index < currentDetail.solutions.length - 1 && <span>, </span>}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
        
        <div className={styles.imageContainer}>
          {currentDetail ? (
            React.createElement(currentDetail.Svg, {
              className: styles.detailImage,
              role: "img"
            })
          ) : null}
        </div>
      </div>
    </section>
  );
}