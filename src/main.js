// import { API_KEY } from './utils/constants.js';
import { headerContent } from './components/header/header.js';
import { Poster } from './components/poster/poster.js';
import { Category } from './components/category/category.js';
import {
  getCategoriesPreview,
  getTrendingMoviesPreview
} from './services/movies-axios.js';

import '../style.css';

const $ = document;
$.querySelector('#header').append(headerContent);

$.querySelector('#app');

// Trend
const trend = $.querySelector('#trend');
getTrendingMoviesPreview({})
  .then(movies => {
    movies?.forEach(movie => {
      trend.appendChild(
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
