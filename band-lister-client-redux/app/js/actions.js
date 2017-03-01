export const fetchBand = (bandId) => {
  const urlPath = process.env.SERVER_URL + '/bands/' + bandId
  return dispatchFetch(urlPath, 'FETCH_BAND')
}

export const fetchBands = () => {
  const urlPath = process.env.SERVER_URL + '/bands'
  return dispatchFetch(urlPath, 'FETCH_BANDS')
}

const dispatchFetch = (url, type) => {
  return (dispatch) => {
    return fetchJson(url)
    .then(json => dispatch(receiveData(json, type)))
  }
}

const fetchJson = (url) => {
  return fetch(url)
    .then(rawData => rawData.json())
}

const receiveData = (json, type) => {
  switch(type) {
    case 'FETCH_BANDS':
    return {
      type: 'FETCH_BANDS_SUCCESS',
      bands: json
    }
    case 'FETCH_BAND':
    return {
      type: 'FETCH_BAND_SUCCESS',
      currentBand: json
    }
  }
}
