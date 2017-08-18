import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import LayoutComponent from './LayoutComponent'
import BandListContainer from './BandListContainer'
import BandDetailContainer from './BandDetailContainer'
import LoginPageContainer from './login/LoginPageContainer'

export default function AppComponent() {
  let store = createStore(reducer)

  const requireAuth = (nextState, replaceState) => {
    replaceState({nextPathname: nextState.location.pathname}, '/login')
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/login' component={LoginPageContainer}/>
        <Route path="/" component={LayoutComponent}>
          <Route path="bands" component={BandListContainer}/>
          <Route path="bands/:bandId" component={BandDetailContainer}/>
        </Route>
      </Router>
    </Provider>
  )
}
