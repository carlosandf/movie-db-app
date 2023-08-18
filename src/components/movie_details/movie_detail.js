import styles from './movie_detail.module.css';

const $ = document;

const infoContainer = $.querySelector('#movie-details_info');
infoContainer.className = styles['info-container'];

const movieTitle = $.createElement('h2');
movieTitle.className = styles['movie-title'];

const info = $.createElement('div');
info.className = styles.info;

const voteAverage = $.createElement('span');
voteAverage.className = styles['vote-average'];

const overviewText = $.createElement('p');
overviewText.className = styles['overview-text'];

info.append(
  voteAverage,
  overviewText
);

infoContainer.append(
  movieTitle,
  info
);

export function movieInfo ({ title, overview, vote_average }) {
  movieTitle.textContent = title;
  voteAverage.textContent = `${vote_average} / 10`;
  overviewText.textContent = overview;
}
