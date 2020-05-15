import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import List from './containers/List'
import Login from './containers/Login'
import Business from './containers/AddBusiness';
import About from './containers/About'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies['loggedIn']
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
        {...rest}
        render={(props) => checkAuth() === true 
        ? <Component {...props}/>
        : <Redirect to={{pathname: '/login', state:{from: props.location} }} />}
        />
        )
        }


const Router = () => {
    return (
        <Switch>
            <Route exact path="/"  />
            <Route path="/list" component={List}/>
            <Route path='/login' component={Login} />
            <Route path= '/business/:id' component={Business}/>
            <Route path= '/about' component={About}/>
        </Switch>
    );
};

export default Router;