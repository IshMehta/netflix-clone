const API_KEY = "df6877e29738e95dd93eb271ec1aaf99";

const requests = {
    fetchTrending: '/trending/all/week?api_key=df6877e29738e95dd93eb271ec1aaf99&language=en-US',
    fetchNetfluxOriginals: '/discover/tv?api_key=df6877e29738e95dd93eb271ec1aaf99&with_networks=213',
    fethTopRated: '/movie/top_rated?api_key=df6877e29738e95dd93eb271ec1aaf99&language=en-US',
    fetchActionMovies: '/discover/movie?api_key=df6877e29738e95dd93eb271ec1aaf99&with_genres=28',
    fetchComedyMovies: '/discover/movie?api_key=df6877e29738e95dd93eb271ec1aaf99&with_genres=35',
    fetchHorrorMovies: '/discover/movie?api_key=df6877e29738e95dd93eb271ec1aaf99&with_genres=27',
    fetchRomanceMovies: '/discover/movie?api_key=df6877e29738e95dd93eb271ec1aaf99&with_genres=10749',
    fetchDocumentaries: '/discover/movie?api_key=df6877e29738e95dd93eb271ec1aaf99&with_genres=99',
}

export default requests;
