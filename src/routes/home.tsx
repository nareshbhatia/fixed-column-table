import { MovieList } from '@/components/MovieList';
import { movies } from '@/data/movies';

export function HomePage() {
  return (
    <div className="page">
      <h1 className="heading1">Top 10 Movies Of All Time</h1>
      <MovieList movies={movies.slice(0, 10)} />
    </div>
  );
}
