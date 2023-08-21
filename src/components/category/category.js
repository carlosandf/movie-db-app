import { setLocationHash } from '../../utils/set_location_hash.js';
import { saveOnLocalStorage } from '../../utils/local_storage.js';
import { formatUrl } from '../../utils/format_url.js';
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
  span.onclick = () => {
    saveOnLocalStorage('category', name);
    setLocationHash(`category/${url}/${id}`);
  };

  return span;
}
