import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, i) => {
        return (
          <div key={i}>
            Title:{movie.title}
            Time:{movie.time}
            {movie.genres.map((genre, i) => (
              <ul key={i}>
                <li>{genre}</li>
              </ul>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Movies;