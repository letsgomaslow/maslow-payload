import type { Post, ArchiveBlock as ArchiveBlockProps } from '@/payload-types';
import configPromise from '@payload-config';
import { getPayload } from 'payload';
import React from 'react';
import RichText from '@/components/RichText';
import { format } from 'date-fns';
import Link from 'next/link';
import classes from './ArchiveBlock.module.css';  // Updated import path

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string;
  }
> = async (props) => {
  const { id, categories, introContent, limit: limitFromProps, populateBy, selectedDocs } = props;
  const limit = limitFromProps || 3;
  let posts: Post[] = [];

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise });
    const flattenedCategories = categories?.map((category) => (typeof category === 'object' ? category.id : category));
    const fetchedPosts = await payload.find({
      collection: 'posts',
      depth: 1,
      limit,
      ...(flattenedCategories?.length ? { where: { categories: { in: flattenedCategories } } } : {}),
    });
    posts = fetchedPosts.docs;
  } else if (selectedDocs?.length) {
    posts = selectedDocs.map((post) => (typeof post.value === 'object' ? post.value : null)).filter(Boolean) as Post[];
  }

  return (
    <div className={classes.articleList} id={`block-${id}`}>
      <div className={classes.container}>
        {introContent && (
          <div className={classes.header}>
            <RichText className={classes.sectionTitle} data={introContent} enableGutter={false} />
            <div className={classes.divider}></div>
          </div>
        )}
        <div className={classes.content}>
          {posts.map((post, i) => (
            <Link 
              key={i} 
              href={`/posts/${post.slug}`} 
              className={classes.article}
            >
              <div className={classes.imageWrapper}>
                {post.heroImage && typeof post.heroImage === 'object' && post.heroImage.url ? (
                  <img src={post.heroImage.url} alt={post.heroImage.alt || 'Post image'} className={classes.image} />
                ) : (
                  <div className={classes.imagePlaceholder}></div>
                )}
              </div>
              <div className={classes.articleContent}>
                <div className={classes.metadata}>
                  <span className={classes.date}>{post.publishedAt ? format(new Date(post.publishedAt), 'dd MMMM yyyy') : 'No Date'}</span>
                  {post.categories && Array.isArray(post.categories) && post.categories.length > 0 && typeof post.categories[0] === 'object' && 'title' in post.categories[0] && (
                    <span className={classes.tag}>{post.categories[0].title}</span>
                  )}
                </div>
                <h2 className={classes.title}>{post.title}</h2>
                <div className={classes.metadata}>
                  {post.populatedAuthors && post.populatedAuthors.length > 0 && post.populatedAuthors[0]?.name && <span className={classes.author}>{post.populatedAuthors[0].name}</span>}
                  <span className={classes.readMore}>READ ARTICLE →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};