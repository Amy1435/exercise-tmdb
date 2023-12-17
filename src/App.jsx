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
    const [content, setContent] = useState([]);
    const [contentSearch, setContentSearch] = useState("spiderman");
    const [fetchValue, setFetchValue] = useState("movie");

    useEffect(() => {
        const fetchContent = async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/${fetchValue}?api_key=${apiKey}&query=${contentSearch}`
            );
            const objContent = await response.json();
            setContent(objContent.results);
        };

        fetchContent();
    }, [contentSearch, fetchValue]);

    console.log(content);
    const onSearch = async (inputValue, setValue, setSelectSearch) => {
        setContentSearch(inputValue);
        setFetchValue(setSelectSearch);
        setValue("");
    };
    console.log(`content` + content.overview);
    return (
        <>
            <SearchBar onSearch={onSearch} />
            <div className="movie-container">
                {content.map((content) => (
                    <MovieCard
                        key={content.id}
                        title={
                            fetchValue === "movie"
                                ? content.title
                                : content.name
                        }
                        poster={content.poster_path}
                        bio={content.overview}
                    />
                ))}
            </div>
        </>
    );
}

export default App;
