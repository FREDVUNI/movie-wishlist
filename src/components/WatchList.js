import React,{useContext} from 'react'
import {MoviesContext} from '../context/GlobalContext'
import MoviesCard from './MoviesCard'

const WatchList = () => {
    const {watchList} = useContext(MoviesContext)
    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h2 className="heading">my watch list</h2>
                </div>
                {
                    watchList.length > 0 ? (
                    <div className="movie-grid">
                    {
                        watchList?.map((movie)=>{
                        return(
                            <MoviesCard key={movie.id} movie={movie} type="watchList"/>
                        )
                        })
                    }
                    </div>
                    ):(
                        <h4 className="no-movies">There are no movies in your watch list. Add some!</h4>
                    )
                }
            </div>
        </div>
    )
}

export default WatchList
