import React, {  useState } from 'react'
// import { Redirect } from 'react-router'
import { useHistory } from 'react-router-dom';
import {
  TextField,
  Button,
  Container
} from '@material-ui/core'



const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const login = (e) => {
    e.preventDefault()
    document.cookie=
    'loggedIn=true;max-age = 60*1000'
    // set cookie here
    // set loggedIn = true and max-age = 60*1000 (one minute)
    props.loginUser(username)
    history.push("/user")
  }

  console.log(props.user.username)


    return (
    <div className="App">
        <Container maxWidth="sm">
        <form className="login-form" onSubmit={login}>
            <TextField
            
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                name="username"
                label="Username"
                // required
                type="text" />
            <TextField
                onChange={(e) => setPassword(e.target.value)}
                value={password}
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

export default Login;

