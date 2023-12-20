/* eslint-disable react/no-array-index-key */
import React from 'react';

import styles from '../PhonePage.module.scss';

interface AboutArticleProps {
  description: Array<{
    title: string;
    text: string | Array<string>;
  }>;
}

const AboutArticle: React.FC<AboutArticleProps> = ({ description }) => {
  return (
    <div className={styles.aboutArticle}>
      <div>
        <h2 className={styles.articleHeader}>About</h2>
        <div className={styles.articleLine} />
      </div>
      {description.map((section, index) => (
        <section key={index} className={styles.aboutSection}>
          <h3 className={styles.aboutSectionHeader}>{section.title}</h3>
          {Array.isArray(section.text) ? (
            section.text.map((paragraph, i) => (
              <p key={i} className={styles.aboutSectionText}>
                {paragraph}
              </p>
            ))
          ) : (
            <p className={styles.aboutSectionText}>{section.text}</p>
          )}
        </section>
      ))}
    </div>
  );
};

export default AboutArticle;
