import React from 'react'

const MovieControls = ({movie,type}) =>{
    return (
        <div className="inner-card-controls">
            {type === "watchList" &&(
                <>
                    <button className="ctrl-btn">
                        <i className="far-fw far fa-eye"></i>
                    </button>
                    <button className="ctrl-btn">
                        <i className="far-fw fa fa-times"></i>
                    </button>
                </>
            )}
        </div>
    )
}

export default MovieControls