import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import BandListContainer from './BandListContainer'
import BandDetailContainer from './BandDetailContainer'

export default function AppComponent() {
  let store = createStore(reducer)

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={BandListContainer}/>
        <Route path="/bands" component={BandListContainer}/>
        <Route path="/bands/:bandId" component={BandDetailContainer}/>
      </Router>
    </Provider>
  )
}
