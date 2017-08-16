import expect, {spyOn, createSpy} from 'expect'

import * as actions from '../../app/js/actions'
import * as fetcher from '../../app/js/fetcher'

describe('actions', () => {
  let dispatchSpy
  beforeEach(() => {
    expect.restoreSpies()
    dispatchSpy = expect.createSpy()
    process.env.SERVER_URL = 'testUrl'
  })

  describe('fetchThenDispatch', () => {
    it('makes request to correct url', () => {
      const httpGetSpy = expect.spyOn(fetcher, 'httpGet').andReturn({then:()=>{}})

      actions.fetchThenDispatch('http://example.com', 'FETCH_BANDS', ()=>{})

      expect(httpGetSpy).toHaveBeenCalledWith('http://example.com')
    })

    it('makes dispatch with correct action', () => {
      expect.spyOn(fetcher, 'httpGet')
        .andReturn({then: (callback) => callback({fetchedData: 'fetchedData'})})

      actions.fetchThenDispatch('http://example.com', 'FETCH_BANDS', dispatchSpy)

      expect(dispatchSpy).toHaveBeenCalledWith({ type: 'FETCH_BANDS_SUCCESS', data: {fetchedData: 'fetchedData'}})
    })
  })

  describe('loginThenDispatch', () => {
    it('makes request to correct url', () => {
      const httpLoginSpy = expect.spyOn(fetcher, 'httpLogin').andReturn({then:()=>{}})

      actions.loginThenDispatch(dispatchSpy, 'test user', 'test password')

      expect(httpLoginSpy).toHaveBeenCalled()
      expect(httpLoginSpy.calls[0].arguments[0]).toBe('testUrl/login')
      expect(httpLoginSpy.calls[0].arguments[1]).toBe('test user')
      expect(httpLoginSpy.calls[0].arguments[2]).toBe('test password')
    })
  })
})
