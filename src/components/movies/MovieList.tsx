
import MovieDetails from "./MovieDetails";
import type { Movie } from "../../Services/MovieService";

interface MovieListProps {
  movies: Movie[];
  onSeeMore: (movie: Movie) => void;
}

export default function MovieList({ movies, onSeeMore }: MovieListProps) {
  return (
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-full overflow-hidden">

      {movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} onSeeMore={onSeeMore} />
      ))}
    </div>
  );
}
