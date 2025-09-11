const API_BASE = "https://api.themoviedb.org/3";
const API_KEY: string = import.meta.env.MOVIE_API_KEY as string;

console.log("API_KEY:", API_KEY); 

export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date?: string;
  poster_path?: string;
  backdrop_path?: string;
  vote_average?: number;
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

// export async function fetchMovies(query: string = ""): Promise<Movie[]> {
//   try {
//     const url = query
//       ? `${API_BASE}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
//       : `${API_BASE}/movie/popular?api_key=${API_KEY}`;

//     const res = await fetch(url);
//     if (!res.ok) throw new Error("Failed to fetch movies");

//     const data: MovieResponse = await res.json();
//     return data.results || [];
//   } catch (err: unknown) {
//     if (err instanceof Error) {
//       console.error("Error fetching movies:", err.message);
//     } else {
//       console.error("Unexpected error:", err);
//     }
//     return [];
//   }
// }

const options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTVlMjMzNGY2Y2E5NmE3NjMzZjllOGFmYzBhZWRmNyIsIm5iZiI6MTc1NzU4NTAxMC40NDYsInN1YiI6IjY4YzI5ZTcyNjg4YTE2MTRlYjFiZGZlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DO395Vpp4apB5R2ggSK8CGzd2cv4GqiCbzUTQnAtG_0"
  }
};

export async function fetchMovieDetails(): Promise<Movie[]> {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
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

