import React from 'react';
import styles from './Statistics.module.css';

interface StatProps {
  value: string;
  label: string;
  description: string;
  color: 'teal' | 'purple' | 'yellow';
}

interface StatisticsProps {
  title: string;
  stats: StatProps[];
}

export const Statistics: React.FC<StatisticsProps> = ({ title, stats }) => {
  return (
    <section className={styles.statisticsContainer}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={`${styles.statValue} ${styles[stat.color]}`}>
                {stat.value}
              </div>
              <div className={`${styles.statLabel} ${styles[stat.color]}`}>
                {stat.label}
              </div>
              <p className={styles.statDescription}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;