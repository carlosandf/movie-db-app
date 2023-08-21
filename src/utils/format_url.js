export function formatUrl (string) {
  const url = string
    .split(' ')
    .join('-')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // quitar acentos: Á -> A

  return url;
}
