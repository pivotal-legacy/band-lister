import { httpGet, httpLogin } from './fetcher'
import * as router from 'react-router'

export const fetchThenDispatch = (url, type, dispatch) => {
  httpGet(url)
    .then(data => dispatch({type: type + '_SUCCESS', data}))
}

export const loginThenDispatch = (dispatch, username, password) => {
  const url = process.env.SERVER_URL + '/login'
  httpLogin(url, username, password)
    .then(data => {
      dispatch({type: 'LOGIN_SUCCESS', data})
      router.hashHistory.push('/bands')
    })
}
