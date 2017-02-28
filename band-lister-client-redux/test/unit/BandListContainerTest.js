import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'

import BandListContainer from '../../app/js/BandListContainer'
import BandList from '../../app/js/BandList'

describe('BandListContainer', () => {
  it('displays returned bands in table', () => {
    const bands = [
      {id: '1', name: 'The Beatles', memberCount: '4'},
      {id: '2', name: 'Radiohead', memberCount: '5'}
    ]

    expect.spyOn(BandListContainer.prototype, 'fetchBands')
      .andReturn({then: (callback) => callback(bands)})

    let bandListContainer = shallow(<BandListContainer/>)

    expect(bandListContainer.node.type.name).toEqual('BandList')
    expect(bandListContainer.node.props).toEqual({bands: bands})
  })
})
