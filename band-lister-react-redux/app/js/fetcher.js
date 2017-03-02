import 'whatwg-fetch'

export const fetchJson = (url) => {
  return fetch(url)
    .then(rawData => rawData.json())
}
