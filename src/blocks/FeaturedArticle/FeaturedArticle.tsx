import React from 'react';
import classes from './FeaturedArticle.module.css';

interface FeaturedArticle {
  title: string;
  link?: string;
  featured?: boolean;
}

interface FeaturedArticleProps {
  article?: FeaturedArticle;
  blockType: 'featuredArticle';
  id?: string;
  blockName?: string;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  if (!article) return null;

  return (
    <div className={classes.featuredArticle}>
      <div className={classes.content}>
        <div className={classes.tag}>Featured</div>
        <h1 className={classes.title}>{article.title}</h1>
        <a href={article.link || '#'} className={classes.readMore}>
          READ ARTICLE
        </a>
      </div>
    </div>
  );
};