import { connect } from 'react-redux'

import BandList from './BandList'
import {fetchThenDispatch} from './actions'

export const mapStateToProps = state => ({
  bands: state.bands
})

export const mapDispatchToProps = dispatch => ({
  fetchBands: () => {
    const urlPath = process.env.SERVER_URL + '/bands'
    fetchThenDispatch(urlPath, 'FETCH_BANDS', dispatch)
  }
})

const BandListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BandList)

export default BandListContainer
