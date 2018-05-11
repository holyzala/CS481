import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {connect} from "react-redux";
import {addMovie} from "../actions/echo";

class AddForm extends Component {
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

    onSelect = (movie) => this.setState({selected: movie});

    submit = (e) => {
        e.preventDefault();
        this.props.addMovie({
            movie_id: this.state.selected.imdbID,
            title: this.state.selected.Title,
            poster: this.state.selected.Poster,
            purchase_date: e.target[0].value,
            location: e.target[1].value,
            rating: e.target[2].value,
            notes: e.target[3].value
        });
        this.setState({movies: [], selected: null, searchString: "", timer: null});
        this.props.cancel();
    };

    getDisplay = () => {
        if (this.state.selected) {
            return (
                <form action="#" method="get" onSubmit={this.submit}>
                    <label htmlFor="purchase">Purchase Date:</label>
                    <input id="purchase" type="date" required={true}/>
                    <label htmlFor="location">Location:</label>
                    <input id="location" type="text"/>
                    <label htmlFor="rating">Personal Rating:</label>
                    <input id="rating" type="number"/>
                    <label htmlFor="notes">Notes:</label>
                    <input id="notes" type="text"/>
                    <input type="submit"/>
                </form>
            )
        } else {
            let movies = this.state.movies.map(movie => (
                <img key={movie.imdbID} src={movie.Poster} alt={movie.Title} height="120px"
                     onClick={() => this.onSelect(movie)}/>
            ));
            return (
                <div>
                    <input type="text" onChange={this.onChange}/>
                    <Button onClick={this.props.cancel}>Cancel</Button>
                    {movies}
                </div>
            )
        }
    };

    render() {
        return this.getDisplay()
    }
}

const mapDispatchToProps = (dispatch) => ({
    addMovie: (myMovie) => {
        dispatch(addMovie(myMovie))
    }
});

export default connect(null, mapDispatchToProps)(AddForm);
