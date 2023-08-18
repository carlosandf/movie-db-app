import { Poster } from './components/poster/poster.js';
import { Category } from './components/category/category.js';
import { headerHome, headerMovieDetail } from './components/header/header.js';
import { IMAGE_URL } from './utils/constants.js';
import { movieDetails, homeContent } from './components/views/views.js';
import {
  findById,
  getCategoriesPreview,
  getTrendingMoviesPreview
} from './services/movies-axios.js';

import '../style.css';

const $ = document;
// $.querySelector('#header').append(headerContent);

$.querySelector('#app');

// Trend
const trend = $.querySelector('#trend');
getTrendingMoviesPreview({})
  .then(movies => {
    movies?.forEach(movie => {
      trend?.appendChild(
        Poster(movie)
      );
    });
  })
  .catch(console.error);

// Genres
const categories = $.querySelector('#categories');
getCategoriesPreview()
  .then(genres => {
    genres?.forEach(genre => {
      categories.appendChild(
        Category(genre)
      );
    });
  });

window.onhashchange = navigation;
window.addEventListener('DOMContentLoaded', navigation);

function navigation () {
  const hash = window.location.hash;
  if (hash.includes('movie')) {
    const id = hash.split('=').at(1);
    findById({ id })
      .then(movie => {
        headerMovieDetail({ poster: `${IMAGE_URL}/${movie?.poster_path}` });
        movieDetails(movie);
      });
  } else if (hash === '') {
    headerHome();
    homeContent();
  }
}
