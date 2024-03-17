import PropTypes from 'prop-types'

function ListOfMovies({movies}) {
    return (
        <ul className='movies'>
            {
                movies.map(movie => (
                    <li className='movie' key={movie.id}>
                        <h3>Titulo:{movie.title}</h3>
                        <p>Año: {movie.year}</p>
                        <img src={movie.poster} alt={`a ${movie.title} movie poster`} />
                    </li>
                ))
            }
        </ul>
    )
}

function NoMoviesResult() {
    return (
        <p>No se encontraron resultados</p>
    )
}

export function Movies ({movies}) {
	const hasMovies = movies?.length > 0

    return (
            hasMovies
                ? <ListOfMovies movies={movies} />
                : <NoMoviesResult />
    )
}

ListOfMovies.propTypes = {
    movies: PropTypes.array
}

Movies.propTypes = {
    movies: PropTypes.array
}