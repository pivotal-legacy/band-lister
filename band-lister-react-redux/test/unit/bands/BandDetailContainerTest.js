import expect from 'expect'

import {mapStateToProps, mapDispatchToProps} from '../../../app/js/bands/BandDetailContainer'
import * as actions from '../../../app/js/dataStore/actions'

describe('BandDetailContainer', () => {
  beforeEach(() => expect.restoreSpies())

  it('maps band to props', () => {
    const currentBand = {id: 1, name: 'The Beatles', memberCount: 4}
    const state = {currentBand}
    const props = mapStateToProps(state)

    expect(props.band).toEqual(currentBand)
  })

  it('maps fetch band function to props', () => {
    const dispatchspy = expect.createSpy()
    const ownProps = {params: { bandId: 1}}
    const props = mapDispatchToProps(dispatchspy, ownProps)
    const fetchThenDispatchSpy = expect.spyOn(actions, 'fetchThenDispatch')
    process.env.SERVER_URL = 'http://hellohost:1234'
    const url = 'http://hellohost:1234/bands/1'

    props.fetchBand()

    expect(fetchThenDispatchSpy).toHaveBeenCalledWith(url, 'FETCH_BAND', dispatchspy)
  })
})
