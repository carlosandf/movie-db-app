import { saveOnLocalStorage } from '../../utils/local_storage.js';
import { headerGenericList, headerHome, headerMovieDetail } from '../header/header.js';
import { movieInfo } from '../movie_details/movie_detail.js';
import { Poster } from '../poster/poster.js';
import { PosterSkeleton } from '../poster_skeleton/poster_skeleton.js';

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

export const movieDetails = (movie) => {
  home.classList.add('inactive');
  detailsContainer.classList.remove('inactive');
  genericListConteiner.classList.add('inactive');

  headerMovieDetail({ poster_path: movie.backdrop_path });
  movieInfo(movie);
};

export const genericListView = ({ movies, name, searchActive }) => {
  home.classList.add('inactive');
  genericListConteiner.classList.remove('inactive');
  detailsContainer.classList.add('inactive');

  const title = genericListConteiner.children[0];
  title.textContent = name;

  saveOnLocalStorage('category', name);

  genericList.innerHTML = '';
  headerGenericList({ searchActive });

  if (!movies) {
    const { length } = new Array(30);
    for (let i = 0; i < length; i++) {
      genericList.appendChild(
        PosterSkeleton()
      );
    }
    return;
  }

  genericList.innerHTML = '';
  movies?.forEach(movie => {
    genericList.appendChild(
      Poster({ movie, generic: true })
    );
  });
};
