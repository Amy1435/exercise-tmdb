const MovieCard = ({ title, poster, bio }) => {
    return (
        <div className="card-container">
            <h1>{title}</h1>
            <figure>
                <img
                    src={
                        poster === null
                            ? "https://cdn0.iconfinder.com/data/icons/file-and-document-41/100/file_document_doc-23-512.png"
                            : `https://image.tmdb.org/t/p/w500${poster}`
                    }
                    alt={`${title}`}
                />
            </figure>
            <div className="movie-info">
                {bio ? (
                    <p className="bio">
                        <strong>Bio: </strong>
                        {bio}
                    </p>
                ) : (
                    <p>
                        <strong>Information not found</strong>
                    </p>
                )}
            </div>
        </div>
    );
};

export default MovieCard;
