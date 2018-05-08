import React, {PureComponent} from 'react';

export default class Movie extends PureComponent {
    render() {
        return (
            <button id={this.props.movie.movie_id} onClick={this.props.click}
                    style={{background: "Transparent no-repeat", border: "none", outline: "none", position: "relative",
                        zIndex: "1"}}>
                <img src={this.props.movie.poster} alt={this.props.movie.title} width="150"
                     style={{position: "relative", zIndex: "-1"}}/>
                <span style={{position: "relative", zIndex: "-1"}}>{this.props.movie.title}</span>
            </button>
        )
    }
}
