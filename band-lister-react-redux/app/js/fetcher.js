import { fetchWrapper } from './globalWrappers/fetchWrapper'

export const httpGet = (url) => {
  return fetchJson(url, {})
}

export const httpPost = (url, body) => {
  const method = 'post'
  return fetchJson(url, {method, body})
}

const fetchJson = (url, options) => {
  return fetchWrapper(url, options)
    .then(rawData => rawData.json())
}
