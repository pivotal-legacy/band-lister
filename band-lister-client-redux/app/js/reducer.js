import { combineReducers } from 'redux'

function bands(state=[], action) {
  switch (action.type) {
    case 'FETCH_BANDS_SUCCESS':
      return action.bands
    default:
      return state
  }
}

function currentBand(state={}, action) {
  switch (action.type) {
    case 'FETCH_BAND_SUCCESS':
      return action.currentBand
    default:
      return state
  }
}

export default combineReducers({
  bands,
  currentBand
})
