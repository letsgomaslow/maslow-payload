import React from 'react';
import styles from './Showcase.module.css';

interface ShowcaseProps {
  caseStudyLabel?: string;
  title: string;
  descriptionOne: string;
  descriptionTwo: string;
  metadata: {
    year: {
      label: string;
      value: string;
    };
    skills: {
      label: string;
      items: {
        skill: string;
      }[];
    };
  };
}

export const Showcase: React.FC<ShowcaseProps> = ({
  caseStudyLabel = 'CASE STUDY',
  title,
  descriptionOne,
  descriptionTwo,
  metadata,
}) => {
  return (
    <div className={styles.showcaseContainer}>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <div className={styles.header}>
            <span className={styles.caseStudyLabel}>{caseStudyLabel}</span>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <div className={styles.description}>
            <p>{descriptionOne}</p>
            <p>{descriptionTwo}</p>
          </div>
        </div>
        
        <div className={styles.rightContent}>
          <div className={styles.metadataSection}>
            <span className={styles.metadataLabel}>{metadata.year.label}</span>
            <h3 className={styles.yearValue}>{metadata.year.value}</h3>
          </div>
          
          <div className={styles.metadataSection}>
            <span className={styles.metadataLabel}>{metadata.skills.label}</span>
            <div className={styles.skillsList}>
              {metadata.skills.items.map((item, index) => (
                <span key={index} className={styles.skill}>
                  {item.skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
