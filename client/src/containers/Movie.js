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
            <button id={this.props.movie.movie_id} onClick={this.props.click}
                    style={{background: "Transparent no-repeat", border: "none", outline: "none", position: "relative",
                        zIndex: "1"}}>
                <img src={this.state.details.Poster} alt={this.state.details.Title} width="150"
                     style={{position: "relative", zIndex: "-1"}}/>
                <span style={{position: "relative", zIndex: "-1"}}>{this.state.details.Title}</span>
            </button>
        )
    }
}
