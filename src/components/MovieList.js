import React, { Component } from 'react';
import { MovieContext } from './context/MovieContext';

class MovieList extends Component {
  render() {
    return (
      //Note tha the consumer is ALWAYS a FUNCTION
      <MovieContext.Consumer>
        {(item) => {
          return (
            <div>
              <p>The name of my movie is {item.state.movie}</p>
              <p>It was produced in {item.state.year}</p>
              <p>It's IMDB rating is {item.state.imdb}</p>
            </div>
          );
        }}
      </MovieContext.Consumer>
    );
  }
}

export default MovieList;
