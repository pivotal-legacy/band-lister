import expect from 'expect'

import {mapStateToProps, mapDispatchToProps} from '../../app/js/BandListContainer'
import * as actions from '../../app/js/actions'

describe('BandListContainer', () => {
  beforeEach(() => expect.restoreSpies())

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
    const dispatchSpy = expect.createSpy()
    const props = mapDispatchToProps(dispatchSpy)
    const fetchThenDispatchSpy = expect.spyOn(actions, 'fetchThenDispatch')
    process.env.SERVER_URL = 'http://hellohost:1234'
    const url = 'http://hellohost:1234/bands'

    props.fetchBands()

    expect(fetchThenDispatchSpy).toHaveBeenCalled()
    expect(fetchThenDispatchSpy).toHaveBeenCalledWith(url, 'FETCH_BANDS', dispatchSpy)
  })
})
