import React, { Component } from 'react'
import MovieList from "./MovieList"
import MovieProvider from "./context/MovieContext"


class App extends Component {
    render() {
        return (
            <MovieProvider>
                <MovieList/>
            </MovieProvider>      
            
        )
    }
}

export default App
