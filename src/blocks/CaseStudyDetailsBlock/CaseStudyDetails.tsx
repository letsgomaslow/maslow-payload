import React from 'react';
import { Media } from '@/components/Media';
import type { Media as MediaType } from '@/payload-types';
import styles from './CaseStudyDetails.module.css';

interface CaseStudyDetailsProps {
  title: string;
  description: {
    paragraph: string;
  }[];
  images: {
    image: MediaType;
  }[];
}

export const CaseStudyDetails: React.FC<CaseStudyDetailsProps> = ({
  title,
  description,
  images,
}) => {
  return (
    <section className={styles.caseStudyContainer}>
      <div className={styles.content}>
        <div className={styles.imagesContainer}>
          {images?.map((imageObj, index) => (
            <div key={index} className={styles.phoneWrapper}>
              <Media 
                resource={imageObj.image}
                className={styles.phoneImage}
                imgClassName={styles.actualImage}
                fill
              />
            </div>
          ))}
        </div>
        
        <div className={styles.textContent}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.description}>
            {description?.map((desc, index) => (
              <p key={index} className={styles.paragraph}>
                {desc.paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetails;