// import { API_KEY } from './utils/constants.js';
import { div } from './components/Header/Header.js';
import { Poster } from './components/Poster/Poster.js';
import { getTrendingMoviesPreview } from './services/movies.js';

import '../style.css';

const $ = document;

const trend = $.querySelector('.trend');
$.querySelector('#header').append(div);

$.querySelector('#app').append();

getTrendingMoviesPreview()
  .then(res => {
    console.log(res);
    res?.forEach(movie => {
      trend.appendChild(
        Poster(movie)
      );
      return Poster(movie);
    });
  })
  .catch(console.error)
  .finally(console.log);
