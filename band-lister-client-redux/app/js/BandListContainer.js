import { connect } from 'react-redux'

import BandList from './BandList'
import * as actions from './BandActions'

export const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchRestaurants: () => {
      dispatch(actions.fetchBands())
    }
  }
}

const BandListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BandList)

export default BandListContainer
// export default class BandListContainer extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {bands: []}
//     this.getBandList = this.getBandList.bind(this)
//   }
//
//   componentWillMount() {
//     this.getBandList()
//   }
//
//   fetchBands() {
//     const urlPath = process.env.SERVER_URL + '/bands'
//     return fetch(urlPath)
//       .then((rawData) => {
//         return rawData.json()
//       })
//   }
//
//   getBandList() {
//     return this.fetchBands()
//       .then((bands) => {
//         this.setState({bands})
//       })
//   }
//
//   render() {
//     return (
//       <BandList bands={this.state.bands}/>
//     )
//   }
// }
