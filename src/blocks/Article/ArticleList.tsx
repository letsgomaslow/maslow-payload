import React from 'react';
import { format } from 'date-fns';
import classes from './ArticleList.module.css';

interface Article {
  title: string;
  date: string;
  author?: string;
  tag?: string;
  link?: string;
  image?: {
    url: string;
    alt: string;
  };
}

interface ArticleListProps {
  articles?: Article[];
  blockType: 'articleList';
  id?: string;
  blockName?: string;
}

export const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  if (!articles?.length) return null;

  return (
    <div className={classes.articleList}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h3 className={classes.sectionTitle}>More articles</h3>
          <div className={classes.divider}></div>
        </div>
        <div className={classes.content}>
          {articles.map((article, i) => (
            <a 
              key={i} 
              href={article.link || '#'} 
              className={classes.article}
            >
              <div className={classes.imageWrapper}>
                {article.image && (
                  <img
                    src={article.image.url}
                    alt={article.image.alt}
                    className={classes.image}
                  />
                )}
              </div>
              <div className={classes.articleContent}>
                <div className={classes.metadata}>
                  {article.date && (
                    <span className={classes.date}>
                      {format(new Date(article.date), 'dd MMMM yyyy')}
                    </span>
                  )}
                  {article.tag && <span className={classes.tag}>{article.tag}</span>}
                </div>
                <h2 className={classes.title}>{article.title}</h2>
                <div className={classes.metadata}>
                  {article.author && (
                    <span className={classes.author}>{article.author}</span>
                  )}
                  <span className={classes.readMore}>READ ARTICLE →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
