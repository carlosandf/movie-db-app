import { IMAGE_URL } from '../../utils/constants.js';
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
  article.className = styles['movie-item'];
  const figure = $.createElement('figure');
  figure.className = styles.figure;

  const img = $.createElement('img');
  img.src = `${IMAGE_URL}/${movie?.poster_path}`;
  img.alt = movie?.title;

  figure.appendChild(img);

  const footer = $.createElement('footer');
  footer.className = styles.posterFooter;
  const span = $.createElement('span');
  span.textContent = movie?.title;
  footer.appendChild(span);

  article.onclick = () => {
    window.location.hash = `movie=${movie?.id}`;
  };

  article.append(
    figure,
    footer
  );
  return article;
};
