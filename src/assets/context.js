import React, { useState, useContext, useEffect, useCallback } from 'react';
import { api_url, search_url } from './urls';

// Creating global context for the application.
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    // Setting states:
    // search - controlled form, movies - list of movies receiving from the api, 
    // loading - indicates to the user that the application loading the content.
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    // Using useCallback hook to prevent the useEffect hook to re-render every time
    // the function getData is called. Only when the appropriate change happen for the
    // function it will re-render.(getting a different url)
    const getData = useCallback(async (url) => {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
        setLoading(false);
    }, []);
    useEffect(() => {
        if (search !== '') {
            getData(search_url + search);
        } else {
            getData(api_url);
        }
    }, [search, getData]);

    return <AppContext.Provider value={{
        loading,
        setSearch,
        movies
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };