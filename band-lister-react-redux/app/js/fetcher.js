import base64 from 'base-64'
import { fetchWrapper } from './globalWrappers/fetchWrapper'

export const httpGet = (url) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
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

  return fetchJson(url, options)
}

const fetchJson = (url, options) => {
  return fetchWrapper(url, options)
    .then(rawData => rawData.json())
}
