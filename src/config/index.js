const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'http://Link-Servidor-Producao';

export default {
  URL_BACKEND,
};
