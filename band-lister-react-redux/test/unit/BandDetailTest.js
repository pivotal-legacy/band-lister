import expect from 'expect'
import { shallow, mount } from 'enzyme'
import React from 'react'

import BandDetail from '../../app/js/BandDetail'

describe('BandDetail', () => {
  it('renders current band details', () => {
    const currentBand = {id: 1, name: 'The Beatles', memberCount: 4}

    const bandDetail = shallow(<BandDetail fetchBand={()=>{}} band={currentBand}/>)

    const rowWithId = bandDetail.find('ul li .id')
    const rowWithName = bandDetail.find('ul li .name')
    const rowWithMemberCount = bandDetail.find('ul li .member-count')

    expect(rowWithId.node.props.children).toBe(1)
    expect(rowWithName.node.props.children).toBe('The Beatles')
    expect(rowWithMemberCount.node.props.children).toBe(4)
  })

  it('fetches band on mount', () => {
    const fetchBandSpy = expect.createSpy()
    const bandDetail = mount(<BandDetail fetchBand={fetchBandSpy} band={{}}/>)

    expect(fetchBandSpy).toHaveBeenCalled()
  })
})
