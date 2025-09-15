// src/tests/Service/movieService.test.ts
process.env.VITE_MOVIE_API_KEY = "test_key";
import { fetchMovieDetails, searchMovies } from "../../Services/MovieService";
import type { Movie } from "../../Services/MovieService";

const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Movie A",
    overview: "Test movie A",
    release_date: "2025-09-15",
    poster_path: "/path/to/posterA.jpg",
    backdrop_path: "/path/to/backdropA.jpg",
    vote_average: 7.5,
  },
  {
    id: 2,
    title: "Movie B",
    overview: "Test movie B",
    release_date: "2025-09-16",
    poster_path: "/path/to/posterB.jpg",
    backdrop_path: "/path/to/backdropB.jpg",
    vote_average: 8.2,
  },
];

beforeEach(() => {
  jest.restoreAllMocks();

  if (
    typeof global.fetch === "function" &&
    (global.fetch as jest.Mock).mockReset
  ) {
    (global.fetch as jest.Mock).mockReset();
  }
});

afterAll(() => {
  delete (process.env as any).VITE_MOVIE_API_KEY;
});

describe("fetchMovieDetails", () => {
  it("returns movies when API call is successful", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        results: mockMovies,
      }),
    } as unknown as Response);

    const movies = await fetchMovieDetails(1);

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("/movie/now_playing?language=en-US&page=1"),
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: `Bearer test_key`,
          accept: "application/json",
        }),
        method: "GET",
      })
    );

    expect(movies).toEqual(mockMovies);
  });

  it("returns empty array when API call fails", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    } as unknown as Response);

    const movies = await fetchMovieDetails(1);
    expect(movies).toEqual([]);
  });

  it("returns empty array on exception", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("Network error"));

    const movies = await fetchMovieDetails(1);
    expect(movies).toEqual([]);
  });
});

describe("searchMovies", () => {
  it("returns movies when search is successful", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        results: mockMovies,
      }),
    } as unknown as Response);

    const movies = await searchMovies("Avengers", 1);

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining(
        "/search/movie?query=Avengers&language=en-US&page=1"
      ),
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: `Bearer test_key`,
          accept: "application/json",
        }),
        method: "GET",
      })
    );
    expect(movies).toEqual(mockMovies);
  });

  it("returns empty array if query is empty", async () => {
    const movies = await searchMovies("   ");
    expect(movies).toEqual([]);

    expect((global.fetch as jest.Mock)?.mock.calls.length).toBe(0);
  });

  it("returns empty array when API call fails", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    } as unknown as Response);

    const movies = await searchMovies("Batman", 1);
    expect(movies).toEqual([]);
  });

  it("returns empty array on exception", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("Network error"));

    const movies = await searchMovies("Batman", 1);
    expect(movies).toEqual([]);
  });
});
