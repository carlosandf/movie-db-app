const select = (query) => document.querySelector(query);

const home = select('#home');
const detailsContainer = select('.section-movie-detail');

export const movieDetails = (/* { title, overview, vote_average } */) => {
  home.classList.add('inactive');
  detailsContainer.classList.remove('inactive');
};

export const homeContent = () => {
  home.classList.remove('inactive');
  detailsContainer.classList.add('inactive');
};
