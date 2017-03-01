import { fetchJson } from './fetcher'

export const fetchThenDispatch = (url, type, dispatch) => {
  fetchJson(url)
    .then(data => dispatch({type: type + '_SUCCESS', data}))
}
