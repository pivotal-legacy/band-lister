import expect from 'expect'

import {mapStateToProps, mapDispatchToProps} from '../../app/js/BandDetailContainer'
import {fetchBand} from '../../app/js/actions'

describe('BandDetailContainer', () => {
  it('maps band to props', () => {
    const currentBand = {id: 1, name: 'The Beatles', memberCount: 4}
    const state = {currentBand}
    const props = mapStateToProps(state)

    expect(props.band).toEqual(currentBand)
  })

  it('maps fetch band function to props', () => {
    const dispatch = expect.createSpy()
    const props = mapDispatchToProps(dispatch)

    props.fetchBand()

    expect(dispatch).toHaveBeenCalledWith(fetchBand())
  })
})
