import React, {Component} from 'react';
import {Button} from 'reactstrap';

export default class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            selected: null,
            timer: null,
            searchString: ""
        }
    }

    getMovie = () => {
        fetch("http://www.omdbapi.com/?apikey=e1a66376&s=" + this.state.searchString)
            .then(result => result.json())
            .then(data => {
                if (data.Response === "True") this.setState({movies: data.Search});
                else this.setState({movies: []})
            })
    };

    onChange = (event) => {
        clearTimeout(this.state.timer);
        this.setState({searchString: event.target.value});
        if (event.target.value === "") {
            this.setState({movies: []});
        } else {
            let timer = setTimeout(this.getMovie, 1000);
            this.setState({timer: timer});
        }
    };

    render() {
        let movies = this.state.movies.map(movie => <img src={movie.Poster} alt={movie.Title} height="120px"/>);
        return (
            <div>
                <input type="text" onChange={this.onChange}/>
                <Button onClick={this.props.cancel}>Cancel</Button>
                {movies}
            </div>
        )
    }
}
