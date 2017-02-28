import React from 'react'

export default class BandList extends React.Component {
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
                  <td className='name'>{band.name}</td>
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
      id: React.PropTypes.string,
      name: React.PropTypes.string,
      memberCount: React.PropTypes.string
    })
  )
}
