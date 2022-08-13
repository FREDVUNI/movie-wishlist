const MovieReducer = (state,action) =>{
    switch(action.type){
        case "ADD_TO_WATCH_LIST":
            return {
                ...state,
                watchList:[action.payload, ...state.watchList]
            }
        default:
            return state;  
    }
};

export default MovieReducer