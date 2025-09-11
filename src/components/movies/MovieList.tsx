
import {Card, CardContent} from "@/components/ui/card"
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Movie } from "../../Services/movieService";
import type { JSX } from "react";
import { Button } from "../ui/button";


interface MovieListProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export default function MovieList({ movies, onSelect }: MovieListProps): JSX.Element {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((m) => (
        <motion.div
          key={m.id}
          whileHover={{ scale: 1.05 }}
          onClick={() => onSelect(m)}
          className="cursor-pointer"
        >
          <Card className="bg-zinc-900 border-none text-center overflow-hidden">
            <CardContent className="p-2">
              <div className="relative h-40 w-full bg-zinc-800 flex items-center justify-center rounded-lg">
                {m.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${m.poster_path}`}
                    alt={m.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-sm">{m.title}</span>
                )}
              </div>
              <div className="flex items-center justify-center gap-1 mt-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">{m.vote_average?.toFixed(1)}</span>
                <Button className="bg-teal-500 hover:bg-teal-600 w-32">See More</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

