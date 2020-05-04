import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import SnackbarContent from '@material-ui/core/SnackbarContent';

class Navigation extends Component  {
    state = {
        login: false,
    }
    switchClick = () => {
        this.setState({login: !this.state.login})
    }
    // guestClick = () => {
    //     console.log(this.props.user.username)
    // }

    render(){
        // console.log(props.user.username)
    return (
        <div>
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Austin Locals
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link onClick={this.guestClick} to="/list">Listing</Link>
                    </li>
                    <li className="nav-list-item">
                    <Link onClick={this.switchClick} to="/Login">{this.state.login ? 'logout' : 'login'}</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    {this.state.login ? <SnackbarContent  message="Logout"  /> : 
    <SnackbarContent  message="Login to Customize Your Page"  />}
        
    
        
        </div>
    )
}
}

export default Navigation