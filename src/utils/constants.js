export const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
export const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_URL = 'https://image.tmdb.org/t/p';

export const getImage = ({ size, path }) => {
  if (size) return `${IMAGE_URL}/w${size}${path}`;

  if (window.outerWidth <= 550) {
    return `${IMAGE_URL}/w400${path}`;
  } else {
    return `${IMAGE_URL}/original${path}`;
  }
};
