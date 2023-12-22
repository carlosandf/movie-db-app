import { compressImage } from './compress_image';

export const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
export const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_URL = 'https://image.tmdb.org/t/p';
export const defaultLoadImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=';

export const getImage = ({ size, path }) => {
  if (size) return `${IMAGE_URL}/w${size}${path}`;

  return new Promise((resolve, reject) => {
    if (window.outerWidth <= 550) {
      return resolve(`${IMAGE_URL}/w500${path}`);
    } else {
      compressImage(`${IMAGE_URL}/original${path}`, 30)
        .then(({ urlCompres }) => resolve(urlCompres));
    }
  });
};
