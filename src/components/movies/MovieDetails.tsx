import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import  type { Movie } from "../../Services/movieService";
import type { JSX } from "react";

interface MovieDetailsProps {
  movie: Movie | null;
}

export default function MovieDetails({ movie }: MovieDetailsProps): JSX.Element | null {
  if (!movie) return null;

  return (
    <section className="grid md:grid-cols-2 gap-6">
      <div className="bg-zinc-900 rounded-lg p-4 flex items-center justify-center">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg"
          />
        ) : (
          <span className="text-lg">{movie.title} Poster</span>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            {movie.title}
            <span className="flex items-center gap-1 text-yellow-400 text-sm">
              <Star className="w-4 h-4" /> {movie.vote_average?.toFixed(1)}
            </span>
          </h3>
          <p className="text-sm text-zinc-400 mt-2">{movie.overview}</p>
          <p className="text-xs text-zinc-500 mt-1">
            Release Date: {movie.release_date}
          </p>
          
        </div>

        <Button className="bg-teal-500 hover:bg-teal-600 w-32">See More</Button>
      </div>
    </section>
  );
}
