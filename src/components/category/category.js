import styles from './category.module.css';
/*
<span class="category">
  <a href="">Drama</a>
</span>
*/
const $ = document;
export function Category ({ name, id }) {
  const span = $.createElement('span');
  span.className = styles.category;
  span.id = id;

  const link = $.createElement('a');
  link.textContent = name;

  span.appendChild(link);

  return span;
}
