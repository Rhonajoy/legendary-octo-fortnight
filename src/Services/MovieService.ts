const API_BASE = "https://api.themoviedb.org/3";
const ACCESS_TOKEN: string =process.env.VITE_MOVIE_API_KEY 


export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date?: string;
  poster_path?: string;
  backdrop_path?: string;
  vote_average?: number;
  original_language?:string
}

interface MovieResponse {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`
  },
};

export async function fetchMovieDetails(page=1): Promise<Movie[]> {
  try {
    const res = await fetch(
      `${API_BASE}/movie/now_playing?language=en-US&page=${page}`,
      options
    );

    if (!res.ok) throw new Error("Failed to fetch movie details");

    const data: MovieResponse = await res.json();
    return data.results || [];
  } catch (err) {
    console.error(err);
    return [];
  }
}
export async function searchMovies(query: string,page=1): Promise<Movie[]> {
  if (!query.trim()) return [];
  try {
    const res = await fetch(
      `${API_BASE}/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=${page}`,
      options
    );
    if (!res.ok) throw new Error("Failed to search movies");
    const data: MovieResponse = await res.json();
    return data.results || [];
  } catch (err) {
    console.error(err);
    return [];
  }
}