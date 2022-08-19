import React,{createContext,useReducer,useEffect} from 'react'
import MovieReducer from './MovieReducer'

const initialState ={
    watchList:localStorage.getItem("watch-list") ?  
    JSON.parse(localStorage.getItem("watch-list")) : [],

    watched:localStorage.getItem("watched") ? 
    JSON.parse(localStorage.getItem("watched")):[],

    wishList:localStorage.getItem("wish-list") ?  
    JSON.parse(localStorage.getItem("wish-list")) : [],
}

export const MoviesContext = createContext(initialState)  

export const MovieProvider = ({children}) =>{
    const [state,dispatch] = useReducer(MovieReducer,initialState)

    useEffect(()=>{
        localStorage.setItem("watch-list",JSON.stringify(state.watchList))
        localStorage.setItem("watched",JSON.stringify(state.watched))
    },[state])

    //actions
    const addMovie = (movie) =>{
        dispatch({type:"ADD_TO_WATCH_LIST",payload:movie})
    }

    const removeMovie = (id) =>{
        dispatch({type:"REMOVE_FROM_WATCH_LIST",payload:id})
    }

    const watchedMovie = (movie) =>{
        dispatch({type:"ADD_WATCHED_MOVIE",payload:movie})
    }

    const addWatchedMovie = (movie) =>{
        dispatch({type:"ADD_TO_WATCHED_LIST",payload:movie})
    }

    const removeWatchedMovie = (id) =>{
        dispatch({type:"REMOVE_FROM_WATCHED_LIST",payload:id})
    }

    const addToWishList = (movie) =>{
        dispatch({type:"ADD_TO_WISH_LIST",payload:movie})
    }

    const removeWishedMovie = (id) =>{
        dispatch({type:"REMOVE_FROM_WISH_LIST",payload:id})
    }

    return(
        <MoviesContext.Provider 
            value={{
                watched:state.watched,
                watchList:state.watchList,
                wishList:state.wishList,
                addMovie,
                removeMovie,
                watchedMovie,
                addWatchedMovie,
                removeWatchedMovie,
                addToWishList,
                removeWishedMovie
            }}
        >
            {children}
        </MoviesContext.Provider>
    )
}