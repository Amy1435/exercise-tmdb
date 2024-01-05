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
    const [error, setError] = useState(); //crea una errore

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/search/${fetchValue}?api_key=${apiKey}&query=${contentSearch}`
                );
                const objContent = await response.json();
                setContent(objContent.results);
            } catch (error) {
                console.log(error);
                setError("Server Error, try again."); ///constrolla gli errori, stampa qualcosa in console e nella pagina
            }
        };

        fetchContent();
    }, [contentSearch, fetchValue]);

    const onSearch = async (inputValue, setValue, setSelectSearch) => {
        setContentSearch(inputValue);
        setFetchValue(setSelectSearch);
        setValue("");
    };

    return (
        <>
            {!error && content.length ? (
                <>
                    <SearchBar onSearch={onSearch} />
                    <div className="movie-container">
                        {content.map((contentItem) => (
                            <MovieCard
                                key={contentItem.id}
                                title={
                                    fetchValue === "movie"
                                        ? contentItem.title
                                        : contentItem.name
                                }
                                poster={
                                    contentItem.poster_path === undefined ||
                                    contentItem.poster_path === null
                                        ? "https://www.feed-image-editor.com/sites/default/files/perm/wysiwyg/image_not_available.png"
                                        : `https://image.tmdb.org/t/p/w500${contentItem.poster_path}`
                                }
                                bio={contentItem.overview}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <p>{error ? error : "Loading..."}</p>
            )}
        </>
    );
}

export default App;
