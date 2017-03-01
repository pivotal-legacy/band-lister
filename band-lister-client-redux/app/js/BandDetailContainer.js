import { connect } from 'react-redux'

import BandDetail from './BandDetail'
import {fetchBand} from './actions'

export const mapStateToProps = (state) => {
  return {
    band: state.currentBand
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchBand: () => {
      dispatch(fetchBand(1))
    }
  }
}

const BandDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BandDetail)

export default BandDetailContainer
