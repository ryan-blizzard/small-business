import React from 'react'
import { Switch, Route } from 'react-router'
import Listing from './container/listing'
import Details from './container/details'
import Login from './container/login'
import User from './container/user'

const Router = () => {
  return (
    <Switch>
    <Route exact path="/"/>
    <Route path = "/listing" component = { Listing }/>
    <Route path = "/details/:id" component = { Details }/>
    <Route path = "/login" component = { Login }/>
    <Route path = "/user" component = { User }/>

    </Switch>
  )
}

export default Router;