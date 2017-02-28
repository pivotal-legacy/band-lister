import { combineReducers } from 'redux'

const INITIAL_STATE = []

const bands = (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_BANDS_SUCCESS':
      return action.bands
    default:
      return state
  }
}

export default combineReducers({
  bands
})
