import React from 'react'
import { Switch, Route } from 'react-router'
import Listing from './container/listing'

const Router = () => {
  return (
    <Switch>
    <Route exact path="/"/>
    <Route path = "/listing" component = { Listing }/>
    </Switch>
  )
}

export default Router;