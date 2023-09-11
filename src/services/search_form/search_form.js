import { setLocationHash } from '../../utils/set_location_hash.js';

export function searchMovies (form) {
  const formData = new FormData(form);

  const data = Object.fromEntries(formData);

  if (!data || data.search_input.length === 0) return;
  setLocationHash(`search=${data.search_input.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`);
  form.children[0].value = '';
}
