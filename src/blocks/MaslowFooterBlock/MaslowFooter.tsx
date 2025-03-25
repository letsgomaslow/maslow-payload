import React from 'react';
import Image from 'next/image';
import styles from './MaslowFooter.module.css';

interface Location {
  city: string;
  address: string;
  status?: string;
}

interface MaslowFooterProps {
  logo?: {
    url: string;
    alt: string;
  };
  locations: Location[];
  copyrightText?: string;
  disableInnerContainer?: boolean;
}

const MaslowFooter: React.FC<MaslowFooterProps> = ({
  logo,
  locations = [],
  copyrightText = `Copyright ${new Date().getFullYear()}. All rights reserved.`,
  disableInnerContainer,
}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.logoSection}>
            {logo && (
              <Image
                src={logo.url}
                alt={logo.alt}
                width={70}
                height={70}
                className={styles.logo}
              />
            )}
          </div>
          
          <div className={styles.locationsContainer}>
            {locations.map((location, index) => (
              <div key={index} className={styles.locationCard}>
                <h3 className={styles.city}>{location.city}</h3>
                <p className={styles.address}>{location.address}</p>
                {location.status && (
                  <span className={styles.status}>{location.status}</span>
                )}
              </div>
            ))}
          </div>

          <div className={styles.copyrightSection}>
            <p className={styles.copyright}>{copyrightText}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MaslowFooter;
