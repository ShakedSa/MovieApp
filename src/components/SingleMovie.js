import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { api_key, single_movie_url, image_path } from '../assets/urls';

// Component for single movie page.

export const SingleMovie = () => {
    // Getting parameters from the url.
    const { id } = useParams();
    // Setting states for the loading and the movie data.
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    // Getting new data of a movie every time the id changes
    useEffect(() => {
        setLoading(true);
        async function getMovie() {
            try {
                const res = await fetch(`${single_movie_url}${id}?api_key=${api_key}`);
                const data = await res.json();
                const { title, vote_average, overview, release_date, poster_path: image, original_language: lang, genres } = data;
                const newMovie = {
                    title, release_date, image, overview, lang, vote_average, genres
                };
                setMovie(newMovie);
                setLoading(false);
            } catch (e) {
                console.log(e);
                setLoading(false);
            }
        }
        getMovie();
    }, [id]);

    if (loading) {
        return <div className="loader"></div>
    }
    const { title, release_date, image, overview, lang, vote_average, genres } = movie;
    return (
        <section className="section movie-section">
            <Link to='/' className='btn btn-primary'>
                back home
            </Link>
            <h2 className='section-title'>{title}</h2>
            <div className="single-movie">
                <img src={image_path + image} alt={title} />
                <div className="single-movie-info">
                    <p>
                        <span className="movie-data">name:</span>
                        {title}
                    </p>
                    <p>
                        <span className="movie-data">release data:</span>
                        {release_date}
                    </p>
                    <p>
                        <span className="movie-data">language:</span>
                        {lang}
                    </p>
                    <p>
                        <span className="movie-data">genres:</span>
                        {genres.map((genre, index) => {
                            return <span key={index}>{genre.name}</span>
                        })}
                    </p>
                    <p>
                        <span className="movie-data">rate:</span>
                        {vote_average}
                    </p>
                    <p>
                        <span className="movie-data">overview:</span>
                        {overview}
                    </p>
                </div>
            </div>
        </section>
    )
}
