import { combineReducers } from 'redux'

export const bands = (state=[], action) => {
  const {type, data} = action
  switch (type) {
    case 'FETCH_BANDS_SUCCESS':
      return data
    default:
      return state
  }
}

export const currentBand = (state={}, action) => {
  const {type, data} = action
  switch (type) {
    case 'FETCH_BAND_SUCCESS':
      return data
    default:
      return {}
  }
}

export const currentUser = (state={}, action) => {
  const { type, data } = action
  switch (type) {
    case 'LOGIN_SUCCESS':
      return data
    default:
      return state
  }
}

export default combineReducers({
  bands,
  currentBand,
  currentUser
})
