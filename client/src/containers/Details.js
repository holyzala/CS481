import React, {PureComponent} from 'react';
import {Button} from 'reactstrap';

export default class Details extends PureComponent {
    render() {
        return (
            <div>
                <div>Title: {this.props.movie.title}</div>
                <div>ID: {this.props.movie.movie_id}</div>
                <div>Purchase Date: {this.props.movie.purchase_date}</div>
                <div>Location: {this.props.movie.location}</div>
                <div>Notes: {this.props.movie.notes}</div>
                <Button onClick={this.props.back} color="primary">Back</Button>
            </div>
        )
    }
}
