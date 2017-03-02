import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

import BandList from '../../app/js/BandList'

describe('BandList', () => {
  it('renders table headers', () => {
    const bands = [
      {id: '1', name: 'The Beatles', memberCount: '4'},
      {id: '2', name: 'Radiohead', memberCount: '5'}
    ]

    const bandList = shallow(<BandList bands={bands}/>)

    const rows = bandList.find('tbody tr')

    expect(rows.nodes[0].props.children).toContain(<td className='id'>1</td>)
    expect(rows.nodes[0].props.children).toContain(<td className='name'>The Beatles</td>)
    expect(rows.nodes[0].props.children).toContain(<td className='member-count'>4</td>)

    expect(rows.nodes[1].props.children).toContain(<td className='id'>2</td>)
    expect(rows.nodes[1].props.children).toContain(<td className='name'>Radiohead</td>)
    expect(rows.nodes[1].props.children).toContain(<td className='member-count'>5</td>)
  })
})
