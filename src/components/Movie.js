import React from 'react'
import { Link } from 'react-router-dom';
import { image_path } from '../assets/urls'

// Component for a single movie card in the movies list.

export const Movie = ({ id, title, poster_path, vote_average }) => {
    const getClass = (vote) => {
        if (vote >= 8) {
            return 'green';
        }
        if (vote >= 5) {
            return 'orange';
        }
        return 'red';
    }
    return (
        <div className="movie">
            {poster_path ? <img src={image_path + poster_path} alt={title} /> : null}
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`${getClass(vote_average)}`}>{vote_average}</span>
            </div>
            <Link to={`/movie/${id}`} className='btn'>
                more details
            </Link>
        </div>
    )
}
