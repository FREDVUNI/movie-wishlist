import { toast } from 'react-toastify'

const MovieReducer = (state,action) =>{
    switch(action.type){
        case "ADD_TO_WATCH_LIST":
            toast.success("movie has been added to watch list",{
                position:toast.POSITION.BOTTOM_RIGHT
            })
            return {
                ...state,
                watchList:[action.payload, ...state.watchList]
            }
        case "REMOVE_FROM_WATCH_LIST":
            toast.success("movie has been removed from watch list",{
                position:toast.POSITION.BOTTOM_RIGHT
            }) 
            return{
                ...state,
                watchList:state.watchList.filter((movie) => movie.id !== action.payload)
            } 
        case "ADD_WATCHED_MOVIE":
            toast.success("movie has been added to watched",{
                position:toast.POSITION.BOTTOM_RIGHT
            }) 
            return{
                ...state,
                watchList:state.watchList.filter((movie) => movie.id !== action.payload.id),
                watched:[action.payload,...state.watched]
            } 
            
        case "ADD_TO_WATCHED_LIST":
            toast.success("movie has been added to watched list",{
                position:toast.POSITION.BOTTOM_RIGHT
            }) 
            return{
                ...state,
                watched:state.watched.filter((movie) => movie.id !== action.payload.id),
                watchList:[action.payload,...state.watchList]
            }
        case "REMOVE_FROM_WATCHED_LIST":
            toast.success("movie has been removed from watched list",{
                position:toast.POSITION.BOTTOM_RIGHT
            }) 
            return{
                ...state,
                watched:state.watched.filter((movie) => movie.id !== action.payload),
            }
        case "ADD_TO_WISH_LIST":
            toast.success("movie has been added from wish list",{
                position:toast.POSITION.BOTTOM_RIGHT
            }) 
            return{
                ...state,
                wishList:[action.payload, ...state.wishList]
            }
        case "REMOVE_FROM_WISH_LIST":
            toast.success("movie has been removed from wish list",{
                position:toast.POSITION.BOTTOM_RIGHT
            }) 
            return{
                ...state,
                wishList:state.wishList.filter((movie) => movie.id !== action.payload),
            }            
        default:
            return state;  
    }
};

export default MovieReducer