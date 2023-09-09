import styles from './poster_skeleton.module.css';

const $ = document;

export const PosterSkeleton = () => {
  const article = $.createElement('article');
  article.className = styles['movie-item'];

  return article;
};
