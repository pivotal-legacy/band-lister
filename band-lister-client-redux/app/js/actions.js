export const fetchThenDispatch = (url, type, dispatch) => {
  fetch(url)
    .then(rawData => rawData.json())
    .then(data => dispatch({type: type + '_SUCCESS', data}))
}
