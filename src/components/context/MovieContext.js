import React, {createContext} from "react";
export const MovieContext = createContext();

class MovieProvider extends React.Component {
    state = {
        movie: "Avengers",
        year: 2018,
        imdb: 7,
    }
    render(){
        return (
            <MovieContext.Provider value = {{state: this.state}}>
               {this.props.children} 

            </MovieContext.Provider>
           
        )
    }
}

export default MovieProvider