import styles from './poster.module.css';
/*
<article>
  <figure>
    <img src="https://i.pinimg.com/originals/7e/37/b9/7e37b994b613e94cba64f307b1983e39.jpg">
  </figure>
</article>
*/
const $ = document;
export const Poster = (movie) => {
  const article = $.createElement('article');
  const figure = $.createElement('figure');
  figure.className = styles.figure;

  const img = $.createElement('img');
  img.src = movie?.poster;
  img.alt = movie?.title;

  figure.appendChild(img);

  article.appendChild(figure);
  return article;
};
