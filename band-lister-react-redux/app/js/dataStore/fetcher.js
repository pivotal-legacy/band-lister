import base64 from 'base-64'
import { fetchWrapper } from '../globalWrappers/fetchWrapper'
import { getToken, setToken } from '../globalWrappers/localStorageWrapper'

export const httpGet = (url) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'x-auth-token': getToken()
  }
  return fetchWrapper(url, {headers})
    .then(rawData => rawData.json())
}

export const httpLogin = (url, username, password) => {
  const token = base64.encode(`${username}:${password}`)
  const options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Basic ${token}`
    },
    method: 'POST'
  }

  return fetchWrapper(url, options)
    .then(rawData => {
      setToken(rawData.headers.get('x-auth-token'))
      return rawData.json()
    })
}
