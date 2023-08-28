import { carousel } from '../carousel/carousel.js';
import { Category } from '../category/category.js';
import { Poster } from '../poster/poster.js';
import styles from './movie_detail.module.css';

const $ = document;

const infoContainer = $.querySelector('#movie-details_info');
infoContainer.className = styles['info-container'];

const movieTitle = $.createElement('h2');
movieTitle.className = styles['movie-title'];

const info = $.createElement('div');
info.className = styles.info;

const voteAverage = $.createElement('span');
voteAverage.className = styles['vote-average'];

const overviewText = $.createElement('p');
overviewText.className = styles['overview-text'];

const categoriesContainer = $.createElement('section');
categoriesContainer.className = styles['categories-container'];

const relatedMoviesContainer = $.querySelector('#related-movies');
relatedMoviesContainer.classList.add(styles['related-movies-container'], 'inactive');

info.append(
  voteAverage,
  overviewText,
  categoriesContainer
);

infoContainer.append(
  movieTitle,
  info
);

export function movieInfo ({ title, overview, vote_average, genres }) {
  movieTitle.textContent = title;

  const average = Number(vote_average);
  voteAverage.textContent = `${average.toFixed(1)} / 10`;

  overviewText.textContent = overview;

  categoriesContainer.textContent = '';
  genres.forEach(genre => categoriesContainer.appendChild(Category(genre)));

  const relatedMovies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (relatedMovies.length > 0) {
    const carouselContainer = carousel();

    if (relatedMoviesContainer.children[1]) {
      relatedMoviesContainer.removeChild(relatedMoviesContainer.children[1]);
    }
    relatedMoviesContainer.classList.remove('inactive');
    relatedMoviesContainer.append(carouselContainer);

    relatedMovies?.forEach(movie => {
      carouselContainer.appendChild(
        Poster({ movie })
      );
    });
  }
}
