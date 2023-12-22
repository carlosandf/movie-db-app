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
const $target = select('#generi-list-target');

// HOME
export const homeContent = () => {
  home.classList.remove('inactive');
  detailsContainer.classList.add('inactive');
  genericListConteiner.classList.add('inactive');
  headerHome();
};

// MOVIE DETAILS
export const movieDetails = (movie) => {
  home.classList.add('inactive');
  detailsContainer.classList.remove('inactive');
  genericListConteiner.classList.add('inactive');

  headerMovieDetail({ poster_path: movie.backdrop_path, title: movie.title });
  movieInfo(movie);
};

// GENERIC LIST
export const genericListView = async ({ name, searchActive, getMovies = async () => {} }) => {
  home.classList.add('inactive');
  genericListConteiner.classList.remove('inactive');
  detailsContainer.classList.add('inactive');

  const title = genericListConteiner.children[0];
  title.textContent = name;

  saveOnLocalStorage('category', name);

  genericList.innerHTML = '';
  headerGenericList({ searchActive });

  if (typeof getMovies === 'function') {
    const { length } = new Array(30);
    for (let i = 0; i < length; i++) {
      genericList.appendChild(
        PosterSkeleton()
      );
    }

    const movies = await getMovies();
    genericList.innerHTML = '';
    movies?.forEach(movie => {
      genericList.appendChild(
        Poster({ movie, generic: true })
      );
    });

    let page = 2;
    const observer = new window.IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          getMovies(page)
            .then(movies => {
              movies?.forEach(movie => {
                genericList.appendChild(
                  Poster({ movie, generic: true })
                );
              });
              page++;
              if (movies.length === 0) observer.disconnect();
            });
        }
      });
    });

    observer.observe($target);
  }
};
