import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import type { Movie } from "../../Services/MovieService";
import type { JSX } from "react";

interface MovieDetailsProps {
  movie: Movie;
  onSeeMore: (movie: Movie) => void;
}

export default function MovieDetails({ movie, onSeeMore }: MovieDetailsProps): JSX.Element {
  return (
    <section className="bg-zinc-900 rounded-xl shadow-lg overflow-hidden flex flex-col">
      <div className="p-4 flex items-center justify-center">
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg shadow-md"
            loading="lazy"
          />
        
         
        )}
      </div>

      <div className="flex flex-col justify-between p-4 flex-1">
        <div>
          <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
          <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
            <Star className="w-4 h-4" />
            {movie.vote_average?.toFixed(1)}
          </div>
          <p className="text-sm text-zinc-400 mt-2 line-clamp-3">{movie.overview}</p>
          <p className="text-xs text-zinc-500 mt-1">
            Release Date: {movie.release_date}
          </p>
        </div>

        <Button
          onClick={() => onSeeMore(movie)}
          className="mt-4 w-full bg-rose-600 hover:bg-rose-700 text-white rounded-lg py-2 hover:opacity-90 transition"
        >
          See More
        </Button>
      </div>
    </section>
  );
}
