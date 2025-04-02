import React from 'react';
import { Media } from '@/components/Media';
import type { Media as MediaType } from '@/payload-types';
import styles from './CaseStudyDetailsSecond.module.css';

interface CaseStudyDetailsSecondProps {
  title: string;
  points: {
    text: string;
  }[];
  image: MediaType;
}

export const CaseStudyDetailsSecond: React.FC<CaseStudyDetailsSecondProps> = ({
  title,
  points,
  image,
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>{title}</h2>
          <ul className={styles.pointsList}>
            {points.map((point, index) => (
              <li key={index} className={styles.point}>
                {point.text}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <Media 
            resource={image}
            className={styles.image}
            imgClassName={styles.actualImage}
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetailsSecond;