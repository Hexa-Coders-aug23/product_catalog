// TechSpecsArticle.tsx

import React from 'react';
import styles from '../PhonePage.module.scss';

interface TechSpecsArticleProps {
  phone: {
    screen: string;
    resolution: string;
    processor: string;
    ram: string;
    camera: string;
    zoom: string;
    cell: string[];
  };
}

const TechSpecsArticle: React.FC<TechSpecsArticleProps> = ({ phone }) => {
  const {
    screen,
    resolution,
    processor,
    ram,
    camera,
    zoom,
    cell,
  } = phone;

  return (
    <article className={styles.techSpecsArticle}>
      <div className={styles.techSpecsArticleContainer}>
        <div className={styles.techSpecsContainer}>
          <h2 className={styles.articleHeader}>Tech specs</h2>
          <div className={styles.articleLine} />
        </div>
        <ul className={styles.techInfo}>
          <li className={styles.techInfoParametr}>
            <h3 className={styles.techSpecsKey}>Screen</h3>
            <h3 className={styles.techSpecsValue}>{screen}</h3>
          </li>
          <li className={styles.techInfoParametr}>
            <h3 className={styles.techSpecsKey}>Resolution</h3>
            <h3 className={styles.techSpecsValue}>{resolution}</h3>
          </li>
          <li className={styles.techInfoParametr}>
            <h3 className={styles.techSpecsKey}>Processor</h3>
            <h3 className={styles.techSpecsValue}>{processor}</h3>
          </li>
          <li className={styles.techInfoParametr}>
            <h3 className={styles.techSpecsKey}>RAM</h3>
            <h3 className={styles.techSpecsValue}>{ram}</h3>
          </li>
          <li className={styles.techInfoParametr}>
            <h3 className={styles.techSpecsKey}>Camera</h3>
            <h3 className={styles.techSpecsValue}>{camera}</h3>
          </li>
          <li className={styles.techInfoParametr}>
            <h3 className={styles.techSpecsKey}>Zoom</h3>
            <h3 className={styles.techSpecsValue}>{zoom}</h3>
          </li>
          <li className={styles.techInfoParametr}>
            <h3 className={styles.techSpecsKey}>Cell</h3>
            <h3 className={styles.techSpecsValue}>{cell.join(', ')}</h3>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default TechSpecsArticle;
