import styles from './poster_skeleton.module.css';

const $ = document;

export const PosterSkeleton = (width = '100%') => {
  const article = $.createElement('article');
  article.className = styles['movie-item'];
  article.style.minWidth = width;
  return article;
};
