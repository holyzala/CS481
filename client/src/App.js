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
        console.log(this.props);
        this.props.onLogout();
    };

    render() {
        return (
            <div>
                <h2>Welcome to React</h2>
                <Button onClick={this.onLogout} color="primary">Logout</Button>

                <p>
                    {this.props.message}
                </p>
            </div>
        );
    }
}

export default connect(
    state => ({message: serverMessage(state)}),
    {fetchMessage: echo, onLogout: logout}
)(App);
