import { setLocationHash } from '../../utils/set_location_hash.js';
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

  const url = formatUrl(name);
  span.onclick = () => setLocationHash(`category/${url}/${id}`);

  return span;
}

function formatUrl (string) {
  const url = string
    .split(' ')
    .join('-')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // quitar acentos: Á -> A

  return url;
}
