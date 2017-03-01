import expect, {spyOn, createSpy} from 'expect'

import * as actions from '../../app/js/actions'
import * as fetcher from '../../app/js/fetcher'

describe('actions', () => {
  beforeEach(() => expect.restoreSpies())

  describe('fetchThenDispatch', () => {
    it('makes request to correct url', () => {
      const fetchJsonSpy = expect.spyOn(fetcher, 'fetchJson').andReturn({then:()=>{}})

      actions.fetchThenDispatch('http://example.com', 'FETCH_BANDS', ()=>{})

      expect(fetchJsonSpy).toHaveBeenCalledWith('http://example.com')
    })

    it('makes dispatch with correct action', () => {
      expect.spyOn(fetcher, 'fetchJson')
        .andReturn({then: (callback) => callback({fetchedData: 'fetchedData'})})
      const dispatchSpy = expect.createSpy()

      actions.fetchThenDispatch('http://example.com', 'FETCH_BANDS', dispatchSpy)

      expect(dispatchSpy).toHaveBeenCalledWith({ type: 'FETCH_BANDS_SUCCESS', data: {fetchedData: 'fetchedData'}})
    })
  })
})
