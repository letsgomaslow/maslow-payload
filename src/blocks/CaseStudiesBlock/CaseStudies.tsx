'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CaseStudies.module.css';

interface Media {
  url: string;
  filename: string;
}

interface CaseStudy {
  image: Media;
  title: string;
  description: string;
  link?: string;
}

interface CaseStudiesProps {
  cases: CaseStudy[];
  viewAllLink?: string;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ 
  cases = [], 
  viewAllLink = '/case-studies' 
}) => {
  return (
    <section className={styles.caseStudies}>
      <div className={styles.header}>
        <h1 className={styles.title}>At Maslow</h1>
        <h2 className={styles.subtitle}>
          we turn big data into<br />
          business success stories
        </h2>
      </div>

      <div className={styles.grid}>
        {cases.map((study, index) => (
          <Link 
            href={study.link || '#'} 
            key={index} 
            className={styles.card}
            style={{ textDecoration: 'none' }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={study.image.url}
                alt={study.title}
                width={400}
                height={300}
                className={styles.image}
                objectFit="cover"
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{study.title}</h3>
              <p className={styles.cardDescription}>{study.description}</p>
            </div>
          </Link>
        ))}
      </div>
      
      <div className={styles.viewAllWrapper}>
        <Link href={viewAllLink} className={styles.viewAll}>
          View all cases
        </Link>
      </div>
    </section>
  );
};

export default CaseStudies;