import React from 'react';

export default ({movie, click}) => (
    <button id={movie.movie_id} onClick={click}
            style={{
                background: "Transparent no-repeat", border: "none", outline: "none", position: "relative", zIndex: "1"
            }}>
        <img src={movie.poster} alt={movie.title} width="150" style={{position: "relative", zIndex: "-1"}}/>
        <span style={{position: "relative", zIndex: "-1"}}>{movie.title}</span>
    </button>
)
