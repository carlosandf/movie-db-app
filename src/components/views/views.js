import { IMAGE_URL } from '../../utils/constants.js';
import { saveOnLocalStorage } from '../../utils/local_storage.js';
import { headerGenericList, headerHome, headerMovieDetail } from '../header/header.js';
import { movieInfo } from '../movie_details/movie_detail.js';
import { Poster } from '../poster/poster.js';

const $ = document;
const select = (query) => $.querySelector(query);

const home = select('#home');
const detailsContainer = select('#movie-details');
const genericListConteiner = select('#generic-list-container');
const genericList = select('#generic-list');

export const homeContent = () => {
  home.classList.remove('inactive');
  detailsContainer.classList.add('inactive');
  genericListConteiner.classList.add('inactive');
  headerHome();
};

export const movieDetails = ({ title, overview, vote_average, poster_path }) => {
  home.classList.add('inactive');
  detailsContainer.classList.remove('inactive');
  genericListConteiner.classList.add('inactive');

  headerMovieDetail({ poster: `${IMAGE_URL}${poster_path}` });
  movieInfo({ title, overview, vote_average });
};

export const moviesByCategory = ({ movies, categoryName }) => {
  home.classList.add('inactive');
  genericListConteiner.classList.remove('inactive');
  detailsContainer.classList.add('inactive');

  const title = genericListConteiner.children[0];
  title.textContent = categoryName;

  saveOnLocalStorage('category', categoryName);

  genericList.innerHTML = '';
  headerGenericList();

  movies?.forEach(movie => {
    genericList.appendChild(
      Poster({ movie, generic: true })
    );
  });
};
