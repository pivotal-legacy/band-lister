import { connect } from 'react-redux'

import BandList from './BandList'
import {fetchBands} from './actions'

export const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchBands: () => {
      dispatch(fetchBands())
    }
  }
}

const BandListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BandList)

export default BandListContainer
