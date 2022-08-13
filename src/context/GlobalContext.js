import React,{createContext,useReducer,useEffect} from 'react'
import MovieReducer from './MovieReducer'

const initialState ={
    watchList:localStorage.getItem("watch-list") ?  
    JSON.parse(localStorage.getItem("watch-list")) : [],

    watched:localStorage.getItem("watched") ? 
    JSON.parse(localStorage.getItem("watched")):[]
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

    return(
        <MoviesContext.Provider value={{watched:state.watched,watchList:state.watchList,addMovie}}>
            {children}
        </MoviesContext.Provider>
    )
}