import { getImage } from '../../utils/constants.js';
import imageNotFound from '/image_not_found.jpg';
import { setLocationHash } from '../../utils/set_location_hash.js';
import styles from './poster.module.css';
/*
<article>
  <figure>
    <img src="https://i.pinimg.com/originals/7e/37/b9/7e37b994b613e94cba64f307b1983e39.jpg">
  </figure>
</article>
*/
const $ = document;

export const Poster = ({ movie, generic }) => {
  const article = $.createElement('article');
  article.className = styles['movie-item'];
  const figure = $.createElement('figure');
  figure.className = styles.figure;

  if (generic) figure.classList.add(styles['figure-generic-list']);

  const img = $.createElement('img');
  img.src = movie?.poster_path ? getImage({ size: 300, path: movie.poster_path }) : imageNotFound;
  img.alt = movie?.title;
  img.loading = 'lazy';

  figure.appendChild(img);

  // const footer = $.createElement('footer');
  // footer.className = styles.posterFooter;
  // const span = $.createElement('span');
  // span.textContent = movie?.title;
  // footer.appendChild(span);

  article.onclick = () => {
    setLocationHash(`movie/${movie?.id}`);
  };

  article.append(figure);
  return article;
};
