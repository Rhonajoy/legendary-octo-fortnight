import { render, screen, fireEvent } from "@testing-library/react";
import type { Movie } from "@/Services/MovieService";

import MovieDetails from "@/components/movies/MovieDetails";
const mockMovie: Movie = {
  id: 1,
  title: "Movie A",
  overview: "Overview A",
  release_date: "2023-01-01",
  poster_path: "/pathA.jpg",
  backdrop_path: "/backdropA.jpg",
  vote_average: 7.5,
};

describe("MovieDetails Component", () => {
  it("renders movie details correctly", () => {
    const mockOnSeeMore = jest.fn();
    render(<MovieDetails movie={mockMovie} onSeeMore={mockOnSeeMore} />);

    expect(screen.getByText("Movie A")).toBeInTheDocument();
    expect(screen.getByText("Overview A")).toBeInTheDocument();
    expect(screen.getByText("Release Date: 2023-01-01")).toBeInTheDocument();
    expect(screen.getByText("7.5")).toBeInTheDocument();

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300/pathA.jpg"
    );
    expect(img).toHaveAttribute("alt", "Movie A");

    const button = screen.getByRole("button", { name: /see more/i });
    fireEvent.click(button);
    expect(mockOnSeeMore).toHaveBeenCalledWith(mockMovie);
  });

  it("does not render image if poster_path is missing", () => {
    const mockOnSeeMore = jest.fn();
    const movieWithoutPoster = { ...mockMovie, poster_path: undefined };
    render(<MovieDetails movie={movieWithoutPoster} onSeeMore={mockOnSeeMore} />);

    expect(screen.queryByRole("img")).toBeNull();
  });
});
