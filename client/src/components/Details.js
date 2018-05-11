import React from 'react';
import {Button} from 'reactstrap';

export default ({movie, back}) => (
    <div>
        <div>Title: {movie.title}</div>
        <div>ID: {movie.movie_id}</div>
        <div>Purchase Date: {movie.purchase_date}</div>
        <div>Personal Rating: {movie.personal_rating}</div>
        <div>Location: {movie.location}</div>
        <div>Notes: {movie.notes}</div>
        <Button onClick={back} color="primary">Back</Button>
    </div>
);
