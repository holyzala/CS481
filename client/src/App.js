import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Button} from 'reactstrap';

import {logout} from './actions/auth'
import {echo} from './actions/echo'
import {serverMessage} from './reducers'
import Movie from './containers/Movie'
import Details from "./containers/Details";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }

    componentDidMount() {
        this.props.fetchMessage('Hi!')
    }

    onLogout = (event) => {
        event.preventDefault();
        this.props.onLogout();
    };

    getDetails = (event) => {
        console.log(event.target.id);
        const movie = this.props.message.reduce((acc, curr) => curr.movie_id === event.target.id ? curr : acc, null);
        this.setState({selected: movie});
    };

    noDetails = () => this.setState({selected: null});

    getDisplay = () => {
        if (this.state.selected) {
            return <Details movie={this.state.selected} back={this.noDetails}/>;
        }
        return this.props.message.map(item => (
            <Movie key={item.movie_id} movie={item} click={this.getDetails}/>
        ));
    };

    render() {
        return (
            <div>
                <h2>Your Movie List</h2>
                <Button id="logout" onClick={this.onLogout} color="primary">Logout</Button>

                {this.getDisplay()}
            </div>
        );
    }
}

export default connect(
    state => ({message: serverMessage(state)}),
    {fetchMessage: echo, onLogout: logout}
)(App);
