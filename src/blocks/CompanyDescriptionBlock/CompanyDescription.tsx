import React from 'react';
import Link from 'next/link';
import styles from './CompanyDescription.module.css';

interface CompanyDescriptionProps {
  description: string;
  locations: { location: string }[];  
  learnMoreLink?: string;
}

const CompanyDescription: React.FC<CompanyDescriptionProps> = ({
  description,
  locations,
  learnMoreLink = '/about',
}) => {
  return (
    <section className={styles.companyDescription}>
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
        <div className={styles.locations}>
          {locations.map((loc, index) => (
            <span key={index} className={styles.location}>{loc.location}</span>
          ))}
        </div>
        <Link href={learnMoreLink} className={styles.learnMore}>
          LEARN MORE &gt;
        </Link>
      </div>
    </section>
  );
};

export default CompanyDescription;
