import React from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './BandReducer'
import BandListContainer from './BandListContainer'

export default function AppComponent() {
  let store = createStore(reducer, compose(applyMiddleware(thunk)))

  return (
    <Provider store={store}>
      <BandListContainer/>
    </Provider>
  )
}
