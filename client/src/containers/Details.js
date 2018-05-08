import React, {Component} from 'react';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: {}
        }
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=e1a66376&i=' + this.props.movie.movie_id)
            .then(result => result.json())
            .then(data => this.setState({details: data}))
    }

    render() {
        return (
            <div>
                <div>Title: {this.state.details.Title}</div>
                <div>ID: {this.state.details.imdbID}</div>
                <div>Purchase Date: {this.props.movie.purchase_date}</div>
                <div>Location: {this.props.movie.location}</div>
                <div>Notes: {this.props.movie.notes}</div>
                <button onClick={this.props.back}>back</button>
            </div>
        )
    }
}
