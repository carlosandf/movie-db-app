import { setLocationHash } from '../../utils/set_location_hash.js';

export function searchMovies (form) {
  const formData = new FormData(form);

  const data = Object.fromEntries(formData);

  if (!data || !Object.keys(data).length > 0) return;
  setLocationHash(`search=${data.search_input}`);
  form.children[0].value = '';
}
