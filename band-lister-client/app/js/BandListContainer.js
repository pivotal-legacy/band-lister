import React from 'react'

export default class BandListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {bands: []}
    this.getBandList = this.getBandList.bind(this)
  }

  componentWillMount() {
    this.getBandList()
  }

  fetchBands() {
    const urlPath = process.env.SERVER_URL + '/bands'
    return fetch(urlPath)
      .then((rawData) => {
        return rawData.json()
      })
  }

  getBandList() {
    return this.fetchBands()
      .then((bands) => {
        this.setState({bands})
      })
  }

  render() {
    return (
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
            {this.state.bands.map((band) => {
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
