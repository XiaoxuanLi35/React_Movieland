import React from "react";
import {useNavigate} from "react-router-dom";

const MovieCard = ({movie}) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/movie/${movie.imdbID}`);
    };

    return (
        <div className="movie" onClick={handleClick}>
        <div>
            <p>{movie.Year}</p>
        </div>
        <div>
            <img src={movie.Poster !== "N/A" ? movie.Poster : 'https://placehold.co/400x600'} alt={movie.Title}/>
        </div>
        <div>
           <span>{movie.Type}</span>
           <h3>{movie.Title}</h3> 
        </div>
    </div> 
    );
}

export default MovieCard;
