import React,{useContext} from 'react'
import {MoviesContext} from '../context/GlobalContext'
import MoviesCard from './MoviesCard'

const Watched = () => {
    const {watched} = useContext(MoviesContext)
    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h2 className="heading">my watched movies</h2>
                    <span className="count-pill">
                        {watched.length === 1 ? watched.length +' movie':watched.length +' movies'}
                    </span>
                </div>
                {
                    watched.length > 0 ? (
                    <div className="movie-grid">
                    {
                        watched?.map((movie)=>{
                        return(
                            <MoviesCard key={movie.id} movie={movie} type="watched"/>
                        )
                        })
                    }
                    </div>
                    ):(
                        <h4 className="no-movies">There are no movies in your watched list. Add some!</h4>
                    )
                }
            </div>
        </div>
    )
}

export default Watched
