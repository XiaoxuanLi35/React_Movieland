import './App.css'; 
import React from "react";
import { useState, useEffect } from "react";
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

const App = () => {
    // State management for movies, search term
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
    // Function to fetch movies from the API
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    // Effect to load initial movies
    useEffect(() => {
        searchMovies('Spiderman');
    }, []);
  
    return (
    <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
            <input
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
            />
        </div>

        {movies?.length > 0
            ?(
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie = {movie}/>
                    ))}
                </div>
            ) : (
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>
            )
        }

    </div>
  );
}

export default App;