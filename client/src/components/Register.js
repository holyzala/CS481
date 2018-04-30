import React, {Component} from 'react'
import {Alert, Button, Form} from 'reactstrap';

import TextInput from './TextInput'

export default class Register extends Component {

    render() {
        let errors = this.props.errors;
        return (
            <Form onSubmit={this.props.submit}>
                <h1>Register</h1>
                {errors.non_field_errors ? <Alert color="danger">{errors.non_field_errors}</Alert> : ""}
                <TextInput name="username" label="Username" error={errors.username}
                           onChange={this.props.inputchange}/>
                <TextInput name="password" label="Password" error={errors.password} type="password"
                           onChange={this.props.inputchange}/>
                <Button type="submit" color="primary" size="lg">Submit</Button>
                <Button type="submit" color="primary" size="lg"
                        onClick={this.props.cancelRegister}>Cancel</Button>
            </Form>
        )
    }
}