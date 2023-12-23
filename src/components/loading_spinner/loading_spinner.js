import styles from './loading_spinner.module.css';

export const LoadingSpinner = () => {
  const spinner = document.createElement('div');
  spinner.className = styles.loading;
  return spinner;
};
