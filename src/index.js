import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/app/AppContainer';
import createStore from './store/store';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history'

// const axios = require('axios').default
import axios from 'axios'

const baseUrl = (process.env.NODE_ENV === 'production') ? '' : 'http://localhost:3000'  // ! update for production
export const axiosIns =  axios.create({
  baseURL: baseUrl,
  withCredentials: true
})

const store = createStore()
export const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <AppContainer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)