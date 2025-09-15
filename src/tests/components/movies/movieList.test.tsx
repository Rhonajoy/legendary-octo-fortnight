import { render, screen fireEvent } from "@testing-library/react";
import MovieList from "@/components/movies/MovieList";
import type { Movie } from "@/Services/MovieService";


const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Movie A",
    overview: "Overview A",
    release_date: "2023-01-01",
    poster_path: "/pathA.jpg",
    backdrop_path: "/backdropA.jpg",
    vote_average: 7.5,
  },
  {
    id: 2,
    title: "Movie B",
    overview: "Overview B",
    release_date: "2023-02-01",
    poster_path: "/pathB.jpg",
    backdrop_path: "/backdropB.jpg",
    vote_average: 8.2,
  },
];

describe("MovieList Component", () => {
  it("renders a list of MovieDetails components", () => {
    const mockOnSeeMore = jest.fn();
    render(<MovieList movies={mockMovies} onSeeMore={mockOnSeeMore} />);

    expect(screen.getByText("Movie A")).toBeInTheDocument();
    expect(screen.getByText("Movie B")).toBeInTheDocument();

    const buttons = screen.getAllByRole("button", { name: /see more/i });
    expect(buttons.length).toBe(2);

    buttons.forEach((button, index) => {
      fireEvent.click(button);
      expect(mockOnSeeMore).toHaveBeenCalledWith(mockMovies[index]);
    });
  });

  it("renders no movies when movies prop is empty", () => {
    const mockOnSeeMore = jest.fn();
    const { container } = render(<MovieList movies={[]} onSeeMore={mockOnSeeMore} />);
    expect(container.querySelectorAll("section").length).toBe(0); // No MovieDetails rendered
  });
});
