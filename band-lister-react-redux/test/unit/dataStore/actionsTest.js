import React from 'react'
import expect, {spyOn, createSpy} from 'expect'
import * as actions from '../../../app/js/dataStore/actions'
import * as fetcher from '../../../app/js/dataStore/fetcher'
import AppComponent from '../../../app/js/AppComponent'
import * as router from 'react-router'
import * as localStorage from '../../../app/js/globalWrappers/localStorageWrapper'

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

    it('makes dispatch with correct action', () => {
      router.hashHistory = { push: ()=>{} }
      expect.spyOn(fetcher, 'httpLogin')
        .andReturn({then: (callback) => callback({fetchedData: 'fetchedData'})})

      actions.loginThenDispatch(dispatchSpy, 'test user', 'test password')

      expect(dispatchSpy).toHaveBeenCalled()
      expect(dispatchSpy.calls[0].arguments[0].type).toBe('LOGIN_SUCCESS')
      expect(dispatchSpy.calls[0].arguments[0].data).toEqual({fetchedData: 'fetchedData'})
    })

    it('redirects to bands page', () => {
      const pushSpy = expect.createSpy()
      router.hashHistory = { push: pushSpy }

      const httpLoginSpy = expect.spyOn(fetcher, 'httpLogin')
        .andReturn({then: (callback) => callback({fetchedData: 'fetchedData'})})

      actions.loginThenDispatch(dispatchSpy, 'test user', 'test password')

      expect(pushSpy).toHaveBeenCalled()
      expect(pushSpy.calls[0].arguments[0]).toBe('/bands')
    })
  })
})
