import { httpGet } from './fetcher'

export const fetchThenDispatch = (url, type, dispatch) => {
  httpGet(url)
    .then(data => dispatch({type: type + '_SUCCESS', data}))
}
