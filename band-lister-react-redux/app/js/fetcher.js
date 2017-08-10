import 'whatwg-fetch'

export const httpGet = (url) => {
  return fetchJson(url, {})
}

const fetchJson = (url, options) => {
  return fetch(url, options)
    .then(rawData => rawData.json())
}
