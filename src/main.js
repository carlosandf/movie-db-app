import { Poster } from './components/poster/poster.js';
import { Category } from './components/category/category.js';
import { movieDetails, homeContent, genericListView } from './components/views/views.js';
import { carousel } from './components/carousel/carousel.js';
import { getFromLocalStorage } from './utils/local_storage.js';
import { searchMovies } from './services/search_form/search_form.js';
import { PosterSkeleton } from './components/poster_skeleton/poster_skeleton.js';

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

const $title = 'MovieFlix';

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

const arraySkeletons = new Array(7);

for (let i = 0; i < arraySkeletons.length; i++) {
  trendCarousel.appendChild(
    PosterSkeleton('16rem')
  );
}

getTrendingMoviesPreview({})
  .then(movies => {
    trendCarousel.innerText = '';
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

    findById({ id }).then(movie => {
      $.title = `${$title} | ${movie.title}`;
      movieDetails(movie);
    });
  } else if (hash.includes('category')) {
    const [, , categoryId] = hash.split('/');
    const name = getFromLocalStorage('category');

    $.title = `${$title} | ${name}`;
    genericListView({
      getMovies: (page) => findAllByCategory({ id: categoryId, page }),
      name
    });
  } else if (hash.includes('search')) {
    const query = hash.split('=').at(1);
    const name = query.split('%20').join(' ');

    $.title = `${$title} | ${name}`;
    genericListView({
      getMovies: (page) => searchByMovieName({ query, page }),
      name,
      searchActive: true
    });
  } else if (hash === '') {
    $.title = $title;
    homeContent();
  }
  window.scroll({ top: 0 });
}
