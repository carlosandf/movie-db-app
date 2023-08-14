// import { API_KEY } from './utils/constants.js';
import { Header } from './components/Header/Header.js';
import { Poster } from './components/Poster/Poster.js';

import '../style.css';

const $ = document;

const trend = $.querySelector('.trend');

$.querySelector('#app').append(Header);

const movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const total = movies.map(movie => {
  return Poster({ poster: 'https://i.pinimg.com/originals/7e/37/b9/7e37b994b613e94cba64f307b1983e39.jpg' });
});

trend?.append(
  ...total
);
