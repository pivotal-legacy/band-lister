import { combineReducers } from 'redux'

function bands(state=[], action) {
  const {type, data} = action
  switch (type) {
    case 'FETCH_BANDS_SUCCESS':
      return data
    default:
      return state
  }
}

function currentBand(state={}, action) {
  const {type, data} = action
  switch (type) {
    case 'FETCH_BAND_SUCCESS':
      return data
    default:
      return {}
  }
}

export default combineReducers({
  bands,
  currentBand
})
