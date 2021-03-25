const API_KEY = "5908f414d1fc1595ee0bc21btheapikey";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetFlixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&generes=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&generes=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&generes=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&generes=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&generes=99`,
};

export default requests;

// 3/movie/550?api_key=5908f414d1fc1595ee0bc21b35654bc9
// /trending/all/week?api_key=${API_KEY}&language=en-US
// /discover/tv?api_key=${API_KEY}&with_networks=213
