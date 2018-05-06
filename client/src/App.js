import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Button} from 'reactstrap';

import {logout} from './actions/auth'
import {echo} from './actions/echo'
import {serverMessage} from './reducers'

class App extends Component {
    componentDidMount() {
        this.props.fetchMessage('Hi!')
    }

    onLogout = (event) => {
        event.preventDefault();
        this.props.onLogout();
    };

    render() {
        const movies = this.props.message.map(movie => (<div key={movie.name}>{movie.name} | {movie.notes} | {movie.personal_rating} | {movie.purchase_date}</div>));
        return (
            <div>
                <h2>Welcome to React</h2>
                <Button onClick={this.onLogout} color="primary">Logout</Button>

                {movies}
            </div>
        );
    }
}

export default connect(
    state => ({message: serverMessage(state)}),
    {fetchMessage: echo, onLogout: logout}
)(App);
