const MovieCard = ({ title, poster, bio }) => {
    return (
        <div className="card-container">
            <h1>{title}</h1>
            <figure>
                <img src={poster} />
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
