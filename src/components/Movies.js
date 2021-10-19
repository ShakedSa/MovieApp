import React from 'react';
import { Movie } from './Movie';
import { useGlobalContext } from '../assets/context';

//Component for the movies list 

export const Movies = () => {
    // Getting movies and loading states from the global context.

    const { movies, loading } = useGlobalContext();
    // While still fetching data display the loader.
    if (loading) {
        return <div className="loader"></div>
    }
    // else display the movies list.
    if (movies.length === 0) {
        return (
            <main id="main">
                <div className="section-title">
                    empty result search
                </div>
            </main>
        )
    }
    return (
        <main id="main">
            {movies.map((movie) => <Movie {...movie} key={movie.id} />)}
        </main>
    );
}
