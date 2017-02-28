import expect from 'expect'

import {mapStateToProps, mapDispatchToProps} from '../../app/js/BandListContainer'

describe('BandListContainer', () => {
  it('maps state to props', () => {
    const bands = [
      {id: 1, name: 'The Beatles', memberCount: 4},
      {id: 2, name: 'Radiohead', memberCount: 5}
    ]

    let state = {bands}

    let props = mapStateToProps(state)

    expect(props.bands).toEqual(bands)
  })
})
