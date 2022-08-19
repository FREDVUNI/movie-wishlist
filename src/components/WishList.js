import React,{useContext} from 'react'
import {MoviesContext} from '../context/GlobalContext'
import MoviesCard from './MoviesCard'

const WishList = () => {
    const {wishList} = useContext(MoviesContext)
    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h2 className="heading">my wish list movies</h2>
                    <span className="count-pill">
                        {wishList.length === 1 ? wishList.length +' movie':wishList.length +' movies'}
                    </span>
                </div>
                {
                    wishList.length > 0 ? (
                    <div className="movie-grid">
                    {
                        wishList?.map((movie)=>{
                        return(
                            <MoviesCard key={movie.id} movie={movie} type="wish"/>
                        )
                        })
                    }
                    </div>
                    ):(
                        <h4 className="no-movies">There are no movies in your wish list. Add some!</h4>
                    )
                }
            </div>
        </div>
    )
}

export default WishList
