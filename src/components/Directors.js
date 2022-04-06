import React from "react";
import { directors } from "../data";

function Directors() {
  console.log(directors);
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, i) => {
        return (
          <div key={i}>
            Name:{director.name}
            {director.movies.map((movies, i) => (
              <ul key={i}>
                <li>{movies}</li>
              </ul>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Directors;