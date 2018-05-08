import React, {Component} from 'react';

export default class Movie extends Component {
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
                <img src={this.state.details.Poster} alt={this.state.details.Title} width="150"/>
                {this.state.details.Title}
            </div>
        )
    }
}
