import React from 'react'
import { Link } from 'react-router'

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
  bands: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      name: React.PropTypes.string,
      memberCount: React.PropTypes.number
    })
  ).isRequired,
  fetchBands: React.PropTypes.func.isRequired
}
