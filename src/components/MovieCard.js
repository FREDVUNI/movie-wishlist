import React,{useContext} from 'react'
import {MoviesContext} from '../context/GlobalContext'

const MovieCard = ({movie}) =>{
    const {addMovie,watchList,watched,watchedMovie} = useContext(MoviesContext)
    
    let addedMovies = watchList && watchList.find((movies) => movies.id === movie.id)
    let watchedMovies = watched && watched.find((movies) => movies.id === movie.id)
    const movieExists = addedMovies ? true: watchedMovies ? true :false
    const watchedExists = watchedMovies ? true :false

    return(
        <div className="result-card">
            <div className="poster-wrapper">
                {
                    movie.poster_path ?(
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} poster`}/>
                    ):(
                        <div className="filler-poster"></div>
                    )
                }
            </div>
            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                    <h4 className="release-date">{movie.release_date? movie.release_date.substring(0,4):'Release date is unknown'}</h4>
                    <p className="overview">{movie.overview ? movie.overview : "No details available"}</p>
                </div>
                <div className="controls">
                    <button className="btn" disabled={movieExists} onClick={()=>addMovie(movie)}>
                        {movieExists ? 'watch list': 'Add To WatchList'}
                    </button>
                    <button className="btn" disabled={watchedExists} onClick={()=>watchedMovie(movie)}>
                        {watchedExists ? 'watched': 'Add To Watched'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MovieCard