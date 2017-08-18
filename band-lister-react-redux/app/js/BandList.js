import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

export default class BandList extends React.Component {
  componentDidMount() {
    this.props.fetchBands()
  }

  render() {
    return(
      <div>
        <h1>Band Lister</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>member count</th>
            </tr>
          </thead>
          <tbody>
            {this.props.bands.map((band) => {

              return (
                <tr key={band.id}>
                  <td className='id'>{band.id}</td>
                  <td className='name'><Link to={`/bands/${band.id}`}>{band.name}</Link></td>
                  <td className='member-count'>{band.memberCount}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

BandList.propTypes = {
  bands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      memberCount: PropTypes.number
    })
  ).isRequired,
  fetchBands: PropTypes.func.isRequired
}
