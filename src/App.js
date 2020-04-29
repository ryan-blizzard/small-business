import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './router';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navigation from './container/Navigation'

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Navigation/>
    <Router/>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
