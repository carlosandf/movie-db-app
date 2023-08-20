import styles from './carousel.module.css';

export function carousel () {
  const container = document.createElement('section');
  container.className = styles.carousel;

  container.onwheel = (evt) => {
    evt.preventDefault();
    container.scrollLeft += evt.deltaY;
  };

  return container;
}
