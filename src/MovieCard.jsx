const MovieCard = ({ title, poster, bio }) => {
    return (
        <div className="card-container">
            <h1>{title}</h1>
            <figure>
                <img
                    src={`https://image.tmdb.org/t/p/w500${poster}`}
                    alt={`${title}`}
                />
            </figure>
            <div className="movie-info">
                <p>
                    <strong>Bio</strong>
                </p>
                <p>{bio}</p>
            </div>
        </div>
    );
};

export default MovieCard;
