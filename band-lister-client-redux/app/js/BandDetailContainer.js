import { connect } from 'react-redux'

import BandDetail from './BandDetail'
import {fetchThenDispatch} from './actions'

export const mapStateToProps = state => ({
  band: state.currentBand
})

export const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBand: () => {
    const urlPath = process.env.SERVER_URL + '/bands/' + ownProps.params.bandId
    fetchThenDispatch(urlPath, 'FETCH_BAND', dispatch)
  }
})

const BandDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BandDetail)

export default BandDetailContainer
