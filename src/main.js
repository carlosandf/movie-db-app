import { Poster } from './components/poster/poster.js';
import { Category, currentCategory } from './components/category/category.js';
import { movieDetails, homeContent, moviesByCategory } from './components/views/views.js';
import { carousel } from './components/carousel/carousel.js';
import {
  findById,
  findAllByCategory,
  getCategoriesPreview,
  getTrendingMoviesPreview
} from './services/movies-axios.js';

import '../style.css';

const $ = document;
// $.querySelector('#header').append(headerContent);

$.querySelector('#app');

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
    const categoryId = hash.split('/').at(2);

    findAllByCategory({ id: categoryId })
      .then(movies => moviesByCategory({ movies, categoryName: currentCategory }));
  } else if (hash === '') {
    homeContent();
  }
}
