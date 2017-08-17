import base64 from 'base-64'
import { fetchWrapper } from './globalWrappers/fetchWrapper'
import { getToken } from './globalWrappers/localStorageWrapper'

export const httpGet = (url) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'x-auth-token': getToken()
  }
  return fetchJson(url, {headers})
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
}

const fetchJson = (url, options) => {
  return fetchWrapper(url, options)
    .then(rawData => rawData.json())
}
