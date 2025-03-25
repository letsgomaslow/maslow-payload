import React from 'react';
import Link from 'next/link';
import styles from './Insights.module.css';

interface InsightPost {
  date: string;
  title: string;
  link?: string;
}

interface InsightsProps {
  posts: InsightPost[];
  morePostsLink?: string;
  disableInnerContainer?: boolean;
}

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const Insights: React.FC<InsightsProps> = ({
  posts = [],
  morePostsLink = '/insights',
  disableInnerContainer,
}) => {
  return (
    <section className={styles.insights}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Insights</h2>
          <Link href={morePostsLink} className={styles.readMore}>
            READ MORE &gt;
          </Link>
        </div>
        <hr className={styles.divider} />
        <div className={styles.postsGrid}>
          {posts.map((post, index) => (
            <div key={index} className={styles.post}>
              <div className={styles.postContent}>
                <span className={styles.date}>{formatDate(post.date)}</span>
                <Link href={post.link || '#'} className={styles.title}>
                  {post.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
