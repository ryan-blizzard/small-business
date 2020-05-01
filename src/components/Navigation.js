import React from 'react'
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
    const switchClick = () => {
        if (props.user.username) {
            // log the user out
            props.loginUser(null)
        } else {
            // do nothing right now
            console.log(props.user.username)
        }
    }
    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Austin Small Business
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Listing</Link>
                    </li>
                    <li className="nav-list-item">
                        {props.user.username ? <Link onClick={switchClick}>Logout</Link> :
                        <Link onClick={switchClick} to="/login">Login</Link>}
                    </li>
                    <li className="nav-list-item">
                        {props.user.username ? <Link onClick={switchClick}>Logout</Link> :
                        <Link onClick={switchClick} to="/add">Add</Link>}
                    </li>
                    
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation