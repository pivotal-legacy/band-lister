import expect from 'expect'
import React from 'react'
import {shallow} from 'enzyme'
import BandListContainer from '../../app/js/BandListContainer'

describe('BandListContainer', () => {
  it('displays returned bands in table', () => {
    const bands = [
      {id: '1', name: 'The Beatles', memberCount: '4'},
      {id: '2', name: 'Radiohead', memberCount: '5'}
    ]

    expect.spyOn(BandListContainer.prototype, 'fetchBands').andReturn(
      {then: (callback) => {
        callback(bands)
      }}
    )

    let bandList = shallow(<BandListContainer/>)
    const rows = bandList.find('tbody tr')

    expect(rows.nodes[0].props.children).toContain(<td className='id'>1</td>)
    expect(rows.nodes[0].props.children).toContain(<td className='name'>The Beatles</td>)
    expect(rows.nodes[0].props.children).toContain(<td className='member-count'>4</td>)

    expect(rows.nodes[1].props.children).toContain(<td className='id'>2</td>)
    expect(rows.nodes[1].props.children).toContain(<td className='name'>Radiohead</td>)
    expect(rows.nodes[1].props.children).toContain(<td className='member-count'>5</td>)
  })
})
