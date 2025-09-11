import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/authentication/Login";
import { Route,  Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/authentication/Signup";
import { fetchMovieDetails } from "./Services/movieService";
import type { Movie } from "./Services/movieService";
import SearchBar from "./components/app/SearchBar";
import Loader from "./components/app/Loader";
import MovieDetails from "./components/movies/MovieDetails";
import MovieList from "./components/movies/MovieList";

function App() {
    const [movies, setMovies] = useState<Movie[]>([]);
  const [selected, setSelected] = useState<Movie | null>(null);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    loadMovies();
  }, [search]);

  async function loadMovies(): Promise<void> {
    setLoading(true);
    const data = await fetchMovieDetails();
    console.log('Dta',data)
    setMovies(data);
    setLoading(false);
  }

  async function handleSelect(): Promise<void> {
    setLoading(true);
    const details = await fetchMovieDetails();
    setSelected(details);
    setLoading(false);
  }

  return (
    <>
     <div className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950">
        <h1 className="text-xl font-bold">MovieApp</h1>
        <SearchBar value={search} onChange={setSearch} />
      </header>

      <main className="p-6 grid gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
          {loading ? (
            <Loader />
          ) : (
            <MovieList movies={movies} onSelect={handleSelect} />
          )}
        </section>

        {selected && <MovieDetails movie={selected} />}
      </main>
    </div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    */}
     
    </>
  );
}

export default App;
