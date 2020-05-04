import React, { Component } from 'react'
// import { Redirect } from 'react-router'
import { withRouter } from 'react-router-dom';
import {
  TextField,
  Button,
  Container
} from '@material-ui/core'


class App extends Component {
  state = {
    username: '',
    password: ''
  }

  handleTextChange = (e) => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  login = (e) => {
    e.preventDefault()
    const { history } = this.props;
    document.cookie=
    'loggedIn=true;max-age = 60*1000'
    // set cookie here
    // set loggedIn = true and max-age = 60*1000 (one minute)
    this.props.loginUser('test')
    history.push("/list")
}

    render() {
    return (
    <div className="App">
        <Container maxWidth="sm">
        <form className="login-form" onSubmit={this.login}>
            <TextField
            
                onChange={this.handleTextChange}
                value={this.state.username}
                name="username"
                label="Username"
                // required
                type="text" />
            <TextField
                onChange={this.handleTextChange}
                value={this.state.password}
                name="password"
                label="Password"
                type="password"
                // required 
                />
            <Button
                type="submit"
                className="login-button"
                variant="contained"
                color="primary">Login</Button>
        </form>
        </Container>
      </div>
    );
  }
}

export default withRouter(App);