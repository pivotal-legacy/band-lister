import React from 'react'

export default class BandDetail extends React.Component {
  componentDidMount() {
    this.props.fetchBand()
  }

  render() {
    let band={}
    if (this.props.band) {
      band = this.props.band
    }
    return (
      <ul key={band.id}>
        <li className='id'>{band.id}</li>
        <li className='name'>{band.name}</li>
        <li className='member-count'>{band.memberCount}</li>
      </ul>
    )
  }
}

BandDetail.propTypes = {
  band: React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    memberCount: React.PropTypes.number
  }),
  fetchBand: React.PropTypes.func.isRequired
}
