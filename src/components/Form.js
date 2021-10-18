import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../assets/context';

// Component for a controlled search form.
export const Form = () => {
    // Receiving setSearch function from the global context.
    const { setSearch } = useGlobalContext();
    // Setting a reference to html element
    const searchValue = useRef('');
    const handleSearch = () => {
        // Setting a new value for search state and invoking the re-render.
        setSearch(searchValue.current.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <header>
            <Link to='/' className='title-btn'><h2 className="title">Movie Application</h2></Link>
            <form id="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="search" className="search" id="search" ref={searchValue} onChange={handleSearch} />
            </form>
        </header>
    )
}
