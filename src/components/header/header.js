import { scrollY } from '../poster/poster.js';

const select = (query) => document.querySelector(query);

const header = select('.header');
const gradientHeader = select('.gradient-header');
const mainTitle = select('.main-title');
const backIcon = select('.back-icon');
const search = select('.search');

export function headerMovieDetail ({ poster }) {
  header?.classList.add('header-movie-details');
  gradientHeader?.classList.remove('inactive');
  mainTitle?.classList.add('inactive');
  backIcon?.classList.remove('inactive');
  search?.classList.add('inactive');
  header.style.backgroundImage = `url(${poster})`;

  backIcon.onclick = () => {
    window.history.back();

    setTimeout(() => window.scroll(scrollY, scrollY), 100);
  };
}

export function headerHome () {
  header?.classList.remove('header-movie-details');
  gradientHeader?.classList.add('inactive');
  mainTitle?.classList.remove('inactive');
  backIcon?.classList.add('inactive');
  search?.classList.remove('inactive');
  header.style.backgroundImage = 'none';
}

export function headerGenericList () {
  header?.classList.remove('header-movie-details');
  mainTitle?.classList.add('inactive');
  backIcon?.classList.remove('inactive');
  search?.classList.add('inactive');
  header.style.backgroundImage = 'none';

  backIcon.onclick = () => {
    window.history.back();
  };
}
