import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, i) => {
        return (
          <div key={i}>
            {actor.name}
            {actor.movies.map((movie, i) => (
              <ul key={i}>
                <li>{movie}</li>
              </ul>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Actors;