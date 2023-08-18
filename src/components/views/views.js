import { movieInfo } from '../movie_details/movie_detail.js';

const $ = document;
const select = (query) => $.querySelector(query);

const home = select('#home');
const detailsContainer = select('#movie-details');

export const movieDetails = ({ title, overview, vote_average }) => {
  home.classList.add('inactive');
  detailsContainer.classList.remove('inactive');

  movieInfo({ title, overview, vote_average });
};

export const homeContent = () => {
  home.classList.remove('inactive');
  detailsContainer.classList.add('inactive');
};
