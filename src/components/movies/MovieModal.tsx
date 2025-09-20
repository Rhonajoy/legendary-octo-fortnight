import { useEffect, type JSX } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import type { Movie } from "../../Services/MovieService";

interface Props {
  movie: Movie | null;
  onClose: () => void;
}

export default function MovieModal({
  movie,
  onClose,
}: Props): JSX.Element | null {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
      aria-labelledby="movie-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-white rounded-2xl shadow-xl p-6 w-11/12 md:w-[420px] text-gray-900">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h2
          id="movie-modal-title"
          className="text-xl font-bold text-rose-600 mb-5 tracking-tight"
        >
           Movie Details
        </h2>

        <div className="text-center">
          <p className="text-3xl font-extrabold text-amber-500">
            {movie.title}
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex justify-between text-sm text-gray-600 font-medium">
            <span className="text-gray-700">Language</span>
            <span className="uppercase text-gray-900 font-semibold">
              {movie.original_language}
            </span>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-700 leading-relaxed">
          {movie.overview}
        </p>

        <div className="mt-8">
          <Button
            variant="outline"
            className="w-full rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-semibold tracking-wide shadow-md transition duration-200"
            onClick={onClose}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}
