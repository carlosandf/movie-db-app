import imageNotFound from '/image_not_found.jpg';
import { getImage } from '../../utils/constants.js';
import { removeFromLocalStorage } from '../../utils/local_storage.js';

const select = (query) => document.querySelector(query);

const header = select('.header');
const gradientHeader = select('.gradient-header');
const mainTitle = select('.main-title');
const backIcon = select('.back-icon');
const search = select('.search');
const headerImg = select('.header-movie-image');
const imgSkeleton = select('#header_img_skeleton');
const nav = select('#nav');

export function headerMovieDetail ({ poster_path, title }) {
  headerImg.classList.add('inactive');
  header?.classList.add('header-movie-details');
  gradientHeader?.classList.remove('inactive');
  mainTitle?.classList.add('inactive');
  backIcon?.classList.remove('inactive');
  search?.classList.add('inactive');
  imgSkeleton?.classList.remove('inactive');
  // headerImg.src = `${poster_path ? getImage({ path: poster_path }) : imageNotFound}`;

  headerImg.alt = title;
  if (poster_path) {
    getImage({ path: poster_path })
      .then(url => { headerImg.src = url; });
  } else { headerImg.src = imageNotFound; }

  headerImg.onload = () => {
    headerImg.classList.remove('inactive');
    imgSkeleton.classList.add('inactive');
  };

  nav.style.position = 'absolute';

  backIcon.onclick = () => {
    window.history.back();
    headerImg.src = null;
  };
  window.addEventListener('hashchange', () => {
    headerImg.src = null;
  });
}

export function headerHome () {
  header?.classList.remove('header-movie-details');
  gradientHeader?.classList.add('inactive');
  mainTitle?.classList.remove('inactive');
  backIcon?.classList.add('inactive');
  search?.classList.remove('inactive');
  imgSkeleton?.classList.add('inactive');
  headerImg.classList.add('inactive');
  header.style.backgroundImage = 'none';
}

export function headerGenericList ({ searchActive = false }) {
  header?.classList.remove('header-movie-details');
  mainTitle?.classList.add('inactive');
  backIcon?.classList.remove('inactive');
  imgSkeleton?.classList.add('inactive');
  headerImg.classList.add('inactive');
  nav.style.position = 'static';

  if (!searchActive) search?.classList.add('inactive');

  header.style.backgroundImage = 'none';

  backIcon.onclick = () => {
    removeFromLocalStorage('category');
    window.history.back();
  };
}
