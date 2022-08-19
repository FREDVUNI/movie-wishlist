import React,{useContext} from 'react'
import {MoviesContext} from '../context/GlobalContext'

const MovieControls = ({movie,type}) =>{
    const {removeMovie,watchedMovie,addWatchedMovie,removeWatchedMovie,addToWishList,removeWishedMovie,wishList} = useContext(MoviesContext)
    const wishExists = wishList && wishList ? true :false
    return (
        <div className="inner-card-controls">
            {type === "watchList" &&(
                <>
                {
                    wishExists && wishExists ? '' :
                    <button className="ctrl-btn" onClick={() => addToWishList(movie)}>
                        <i className="fas fa-gift"></i>
                    </button>

                }
                    <button className="ctrl-btn"
                        onClick={() => watchedMovie(movie)}>
                        <i className="far-fw far fa-eye"></i>
                    </button>
                    <button className="ctrl-btn"
                        onClick={() => removeMovie(movie.id)}>
                        <i className="far-fw fa fa-times"></i>
                    </button>
                </>
            )}

            {type === "watched" &&(
                <>
                    <button className="ctrl-btn"
                        onClick={()=>addWatchedMovie(movie)}>
                        <i className="far-fw far fa-eye-slash"></i>
                    </button>
                     <button className="ctrl-btn"
                        onClick={()=>removeWatchedMovie(movie.id)}>
                        <i className="far-fw fa fa-times"></i>
                    </button>
                </>
            )}

            {type === "wish" &&(
                <>
                     <button className="ctrl-btn"
                        onClick={()=>removeWishedMovie(movie.id)}>
                        <i className="far-fw fa fa-times"></i>
                    </button>
                </>
            )}
        </div>
    )
}

export default MovieControls