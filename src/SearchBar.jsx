import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [value, setValue] = useState("");
    const [selectSearch, setSelectSearch] = useState("movie");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleChangeSelect = (e) => {
        setSelectSearch(e.target.value);
    };

    return (
        <section className="title-searchbar">
            <div>
                <h1>Movie Search</h1>
            </div>
            <div className="search-bar">
                <input type="text" value={value} onChange={handleChange} />
                <button onClick={() => onSearch(value, setValue, selectSearch)}>
                    Search
                </button>
            </div>
            <select value={selectSearch} onChange={handleChangeSelect}>
                <option value="movie">Movie</option>
                <option value="tv"> Tv-Series</option>
                <option value="person">Person</option>
            </select>
        </section>
    );
};

export default SearchBar;
