import React from 'react';
import styles from './Capabilities.module.css';

// Update the interface to include optional url
interface Capability {
  title: string;
  items: { item: string; url?: string }[];
}

interface CapabilitiesProps {
  categories: Capability[];
  viewAllLink?: string;
}

const Capabilities: React.FC<CapabilitiesProps> = ({
  categories = [],
  viewAllLink = '/capabilities',
}) => {
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <section className={styles.capabilities}>
      <div className={styles.container}>
        <h2 className={styles.capabilitiesTitle} style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '20px' }}>Capabilities</h2>
        <div className={styles.grid}>
          {categories.map((category, index) => (
            <div key={index} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <ul className={styles.itemList}>
                {category.items.map((itemObj, itemIndex) => (
                  <li key={itemIndex} className={styles.item}>
                    {itemObj.url ? (
                      <a href={itemObj.url} className={styles.itemLink}>
                        {itemObj.item}
                      </a>
                    ) : (
                      <span className={styles.itemText}>{itemObj.item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.viewAllWrapper}>
          <a href={viewAllLink} className={styles.viewAll}>
            View all
          </a>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
