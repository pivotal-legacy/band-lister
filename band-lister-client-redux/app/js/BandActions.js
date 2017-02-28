
function receiveBands(json) {
  return {
    type: 'FETCH_BANDS_SUCCESS',
    bands: json
  }
}

function fetchBands() {
  const urlPath = process.env.SERVER_URL + '/bands'
  return dispatch => {
    return fetch(urlPath)
      .then((rawData) => rawData.json())
      .then(json => dispatch(receiveBands(json)))
  }
}
