import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=82de9ce0";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        searchMovies("Batman");
    }, []);

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };

    return ( <
        div className = "app" >
        <
        h1 > Filmera < /h1>

        <
        div className = "search" >
        <
        input value = { searchTerm }
        onChange = {
            (e) => setSearchTerm(e.target.value)
        }
        placeholder = "Search for movies" /
        >
        <
        img src = { SearchIcon }
        alt = "search"
        onClick = {
            () => searchMovies(searchTerm)
        }
        /> < /
        div >

        {
            movies && movies.length > 0 ? ( <
                div className = "container" > {
                    movies.map((movie) => ( <
                        MovieCard movie = { movie }
                        />
                    ))
                } < /div>
            ) : ( <
                p > No movies found. < /p>
            )
        } <
        /div>
    );
};

export default App;