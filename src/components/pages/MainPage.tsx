import { useEffect, useState } from "react";
import { fetchMovieDetails, searchMovies } from "@/Services/MovieService";
import type { Movie } from "@/Services/MovieService";
import { SearchBar, Loader } from "../app";
import MovieList from "../movies/MovieList";
import MovieModal from "../movies/MovieModal";
import { User } from "lucide-react";
import { useAuth } from "@/contexts/authContext";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    loadMovies();
  }, [query, page]);

  async function loadMovies() {
    setLoading(true);
    try {
      if (query.trim()) {
        const results = await searchMovies(query, page);
        setMovies(results);
      } else {
        const results = await fetchMovieDetails(page);
        setMovies(results);
      }
    } catch (err) {
      console.error("Error loading movies", err);
    } finally {
      setLoading(false);
    }
  }
  function handleSearch(value: string) {
    setQuery(value);
    setPage(1);
  }
  const handleSignOut = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <>
     <div className="flex flex-col min-h-screen bg-black text-white">
        <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950">
          <h1 className="text-xl font-bold">MovieApp</h1>
          <SearchBar value={query} onChange={handleSearch} />
          <button
            onClick={handleSignOut}
            title="Sign Out"
            className="flex items-center gap-2 px-3 py-2 bg-rose-600 text-white rounded hover:bg-zinc-800 transition-colors duration-200 shadow-sm"
          >
            <User className="w-5 h-5" />
            <span className="font-medium">Log Out</span>
          </button>
        </header>

         <main className="flex-1 p-6 grid gap-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
            {loading ? (
              <Loader />
            ) : (
              <MovieList
                movies={movies}
                onSeeMore={(movie) => setSelectedMovie(movie)}
              />
            )}
          </section>
        </main>

        {selectedMovie && (
          <MovieModal
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
        {!loading && movies.length > 0 && (
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-rose-600 text-white rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span className="text-white">Page {page}</span>
            <button
              onClick={() => setPage((p) => p + 1)}
              className="px-4 py-2 bg-rose-600 text-white rounded"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};
