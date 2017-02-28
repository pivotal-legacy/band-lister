import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

import BandList from '../../app/js/BandList'

describe('BandList', () => {
  it('renders table headers', () => {
    const bands = [
      {id: 1, name: 'The Beatles', memberCount: 4},
      {id: 2, name: 'Radiohead', memberCount: 5}
    ]

    const bandList = shallow(<BandList fetchBands={()=>{}} bands={bands}/>)

    const rowsWithId = bandList.find('tbody tr .id')
    const rowsWithName = bandList.find('tbody tr .name')
    const rowsWithMemberCount = bandList.find('tbody tr .member-count')

    expect(rowsWithId.nodes[0].props.children).toBe(1)
    expect(rowsWithName.nodes[0].props.children).toBe('The Beatles')
    expect(rowsWithMemberCount.nodes[0].props.children).toBe(4)

    expect(rowsWithId.nodes[1].props.children).toBe(2)
    expect(rowsWithName.nodes[1].props.children).toBe('Radiohead')
    expect(rowsWithMemberCount.nodes[1].props.children).toBe(5)
  })
})
