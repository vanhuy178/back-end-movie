const baseUrl = process.env.TMDB_BASE_URL || "https://api.themoviedb.org/3/";
const key = process.env.TMDB_KEY || '238428fde048a6a969a40597b151ba77';

const getUrl = (endpoint, params) => {
  const qs = new URLSearchParams(params);

  return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
};

export default { getUrl };