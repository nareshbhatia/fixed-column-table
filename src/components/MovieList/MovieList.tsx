import { formatDuration } from '@/lib/utils';
import type { Movie } from '@/models';
import './MovieList.css';

export interface MovieListProps {
  /** Movies to be displayed */
  movies: Movie[];
}

export function MovieList({ movies }: MovieListProps) {
  return (
    <table className="movie-list">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Rating</th>
          <th>Year</th>
          <th>Runtime</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.rank}</td>
            <td>{movie.name}</td>
            <td>{movie.certificate}</td>
            <td>{movie.releaseYear}</td>
            <td>{formatDuration(movie.runtime)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
