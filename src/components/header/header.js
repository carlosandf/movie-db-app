import imageNotFound from '../../../public/image_not_found.jpg';
import { IMAGE_URL } from '../../utils/constants.js';
import { removeFromLocalStorage } from '../../utils/local_storage.js';

const select = (query) => document.querySelector(query);

const header = select('.header');
const gradientHeader = select('.gradient-header');
const mainTitle = select('.main-title');
const backIcon = select('.back-icon');
const search = select('.search');

export function headerMovieDetail ({ poster_path }) {
  header?.classList.add('header-movie-details');
  gradientHeader?.classList.remove('inactive');
  mainTitle?.classList.add('inactive');
  backIcon?.classList.remove('inactive');
  search?.classList.add('inactive');
  header.style.backgroundImage = `url(${poster_path ? `${IMAGE_URL}${poster_path}` : imageNotFound})`;

  backIcon.onclick = () => window.history.back();
}

export function headerHome () {
  header?.classList.remove('header-movie-details');
  gradientHeader?.classList.add('inactive');
  mainTitle?.classList.remove('inactive');
  backIcon?.classList.add('inactive');
  search?.classList.remove('inactive');
  header.style.backgroundImage = 'none';
}

export function headerGenericList ({ searchActive = false }) {
  header?.classList.remove('header-movie-details');
  mainTitle?.classList.add('inactive');
  backIcon?.classList.remove('inactive');

  if (!searchActive) search?.classList.add('inactive');

  header.style.backgroundImage = 'none';

  backIcon.onclick = () => {
    removeFromLocalStorage('category');
    window.history.back();
  };
}
