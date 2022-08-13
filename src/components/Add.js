import React,{useState} from 'react'
import MovieCard from './MovieCard'

const Add = () => {
    //query is the value
    //setQuery method enables changing state
    const [query,setQuery] = useState("")
    const [movies,setMovies] = useState([])

    const changeQuery = (e) =>{
        e.preventDefault()
        setQuery(e.target.value)
        
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${e.target.value}&page=1&include_adult=false`,{mode:'cors'})
        .then((res)=> res.json())
        .then((data)=>{
            if(!data.errors){
                setMovies(data.results)
            }else{
                setMovies([])
            }
        })
    }
    return (
        <div className="add-page">
        <div className="container">
            <div className="add-content">
                <div className="input-wrapper">
                    <input type="text" placeholder="search for movies" value={query} onChange={changeQuery}/>
                </div>
                {movies && movies.length > 0 && (
                    <ul className="results">
                        {movies?.map(movie =>(
                            <li key={movie.id}>
                                <MovieCard movie={movie}/>
                            </li>
                        ))}
                     </ul>
                )}
            </div>
        </div>
        </div>
    )
}

export default Add
