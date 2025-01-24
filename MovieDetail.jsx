import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

const MovieDetail = () => {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovieDetail = async () => {
            const response = await fetch(`${API_URL}&i=${id}`);
            const data = await response.json();
            setMovie(data);
        };

        fetchMovieDetail();
    }, [id]);

    if (!movie) return <div className="loading">Loading...</div>;

    return (
        <div className="movie-detail">
            <button className="back-button" onClick={() => navigate('/')}>Back to Search</button>
            <div className="detail-content">
                <div className="poster">
                    <img 
                        src={movie.Poster !== "N/A" ? movie.Poster : 'https://placehold.co/400x600'} 
                        alt={movie.Title}
                    />
                </div>
                <div className="info">
                    <h1>{movie.Title} ({movie.Year})</h1>
                    <p className="plot">{movie.Plot}</p>
                    <div className="metadata">
                        <p><strong>Director:</strong> {movie.Director}</p>
                        <p><strong>Cast:</strong> {movie.Actors}</p>
                        <p><strong>Genre:</strong> {movie.Genre}</p>
                        <p><strong>Runtime:</strong> {movie.Runtime}</p>
                        <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;