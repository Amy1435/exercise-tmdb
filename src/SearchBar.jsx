import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <section className="title-searchbar">
            <div>
                <h1>Movie Search</h1>
            </div>
            <div className="search-bar">
                <input type="text" value={value} onChange={handleChange} />
                <button onClick={() => onSearch(value, setValue)}>
                    Search
                </button>
            </div>
            <select name="" id="">
                <option value="Movie">Movie</option>
                <option value="Series">Series</option>
                <option value="Person">Person</option>
            </select>
        </section>
    );
};

export default SearchBar;
