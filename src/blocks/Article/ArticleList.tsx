import React from 'react';
import Link from 'next/link';
import styles from './ArticleList.module.css';

interface Article {
  title: string;
  date: string;
  link?: string;
  image?: {
    url: string;
    alt: string;
  };
  featured?: boolean;
}

interface ArticleListProps {
  articles?: Article[];
  blockType: 'articleList';
  id?: string;
  blockName?: string;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles = [] }) => {
  if (!articles.length) return null;

  return (
    <section className={styles.articleList}>
      <div className={styles.content}>
        {articles.map((article, index) => (
          <article key={index} className={`${styles.article} ${index === 0 ? styles.featured : ''}`}>
            {index === 0 && <span className={styles.featuredTag}>Featured</span>}
            {article.image && (
              <div className={styles.imageWrapper}>
                <img src={article.image.url} alt={article.image.alt || article.title} className={styles.image} />
              </div>
            )}
            <div className={styles.articleContent}>
              <span className={styles.date}>
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <Link href={article.link || '#'} className={styles.title}>
                {article.title}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ArticleList;
