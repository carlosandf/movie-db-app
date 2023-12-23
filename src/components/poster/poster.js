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
const defaultLoadImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=';
const $ = document;

const observer = new window.IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
      entry.target.onload = () => {
        entry.target.parentNode.classList.remove(styles.loading);
      };
    }
  });
});

export const Poster = ({ movie, generic }) => {
  const article = $.createElement('article');
  article.className = styles['movie-item'];
  const figure = $.createElement('figure');
  figure.classList.add(styles.figure, styles.loading);

  if (generic) figure.classList.add(styles['figure-generic-list']);

  const img = $.createElement('img');
  const url = movie?.poster_path ? getImage({ size: 300, path: movie.poster_path }) : imageNotFound;

  img.setAttribute(
    'data-src',
    url
  );
  img.src = defaultLoadImage;
  img.loading = 'lazy';
  figure.appendChild(img);
  img.alt = movie?.title;
  observer.observe(img);

  article.onclick = () => {
    setLocationHash(`movie/${movie?.id}`);
  };

  article.append(figure);
  return article;
};
