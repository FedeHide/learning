import { useState } from "react"

export const MoviesSearch = () => {

    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = 'acf5472e45e436d5026bfd4c5e792981'

    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }

    const hadleSubmit = (e) => {
        e.preventDefault();
        fetchMovies();
    }

    const fetchMovies = async () => {
        try {
            const res = await fetch(`${urlBase}?query=${search}&api_key=${API_KEY}`)
            const data = await res.json()
            setMovies(data)
            console.log(data)
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <div className="container">
            <h1>Movie Search</h1>
            <form onSubmit={hadleSubmit}>
                <input value={search} onChange={handleInputChange} type="text" placeholder="Search for a movie" />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movie-list">
                {movies.results && movies.results.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <h2>{movie.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <p>{movie.overview}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
