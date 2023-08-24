import { Poster } from './components/poster/poster.js';
import { Category } from './components/category/category.js';
import { movieDetails, homeContent, genericListView } from './components/views/views.js';
import { carousel } from './components/carousel/carousel.js';
import { getFromLocalStorage } from './utils/local_storage.js';
import { searchMovies } from './services/search_form/search_form.js';

import {
  findById,
  findAllByCategory,
  getCategoriesPreview,
  getTrendingMoviesPreview,
  searchByMovieName
} from './services/movies-axios.js';

import '../style.css';

const $ = document;
// $.querySelector('#header').append(headerContent);

// search input
const searchForm = $.querySelector('#search_form');
searchForm.onsubmit = (e) => {
  e.preventDefault();

  searchMovies(e.target);
};

// Trend
const trend = $.querySelector('#trend');
const trendCarousel = carousel();
trend.appendChild(trendCarousel);

getTrendingMoviesPreview({})
  .then(movies => {
    movies?.forEach(movie => {
      trendCarousel?.appendChild(
        Poster({ movie })
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
    const id = hash.split('/').at(1);

    findById({ id }).then(movie => movieDetails(movie));
  } else if (hash.includes('category')) {
    const [, , categoryId] = hash.split('/');
    const name = getFromLocalStorage('category');

    findAllByCategory({ id: categoryId })
      .then(movies => {
        genericListView({ movies, name });
      });
  } else if (hash.includes('search')) {
    const query = hash.split('=').at(1);
    const name = query.split('%20').join(' ');
    searchByMovieName({ query })
      .then(movies => {
        genericListView({ movies, name });
      });
  } else if (hash === '') {
    homeContent();
  }
  window.scroll({ top: 0 });
}
