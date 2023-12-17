// Bonus:
// - Nel componente SearchBar, aggiungete una select che fa scegliere all'utente tra 'Movie', 'TV Series', 'Person'.
// All' onSearch, passate quindi DUE parametri (il value dell'input, come nell'esercizio normale,
// e anche il valore scelto al select). Quindi, effettuare una fetch a una chiamata diversa in base
//  a che l'utente voglia cercare un film, una serie TVounapersona.

import { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import "./App.scss";
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
    const [movies, setMovies] = useState([]);
    const [movieSearch, setMovieSearch] = useState("spiderman");

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieSearch}`
            );
            const objMovies = await response.json();

            setMovies(objMovies.results);
        };

        fetchMovies();
    }, [movieSearch]);

    const onSearch = async (inputValue, setValue) => {
        setMovieSearch(inputValue);
        setValue("");
    };

    return (
        <>
            <SearchBar onSearch={onSearch} />
            <div className="movie-container">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        poster={movie.poster_path}
                        bio={movie.overview}
                    />
                ))}
            </div>
        </>
    );
}

export default App;
