import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import BandListContainer from './BandListContainer'
import BandDetailContainer from './BandDetailContainer'

export default function AppComponent() {
  let store = createStore(reducer)

  // const currentContainer = <BandListContainer/>
  const currentContainer = <BandDetailContainer/>

  return (
    <Provider store={store}>
      {currentContainer}
    </Provider>
  )
}
