import expect from 'expect'

import {mapStateToProps, mapDispatchToProps} from '../../app/js/BandListContainer'
import {fetchBands} from '../../app/js/actions'

describe('BandListContainer', () => {
  it('maps bands to props', () => {
    const bands = [
      {id: 1, name: 'The Beatles', memberCount: 4},
      {id: 2, name: 'Radiohead', memberCount: 5}
    ]
    const state = {bands}
    const props = mapStateToProps(state)

    expect(props.bands).toEqual(bands)
  })

  it('maps fetch bands function to props', () => {
    const dispatch = expect.createSpy()
    const props = mapDispatchToProps(dispatch)

    props.fetchBands()

    expect(dispatch).toHaveBeenCalledWith(fetchBands())
  })
})
