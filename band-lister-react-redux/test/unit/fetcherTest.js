import expect from 'expect'
import base64 from 'base-64'
import { httpGet, httpLogin } from '../../app/js/fetcher'
import * as fetchWrapper from '../../app/js/globalWrappers/fetchWrapper'
import * as localStorage from '../../app/js/globalWrappers/localStorageWrapper'

describe('fetcher', () => {
  beforeEach(() => expect.restoreSpies())

  describe('httpGet', () => {
    it('calls url with correct options', () => {
      expect.spyOn(localStorage, 'getToken')
        .andReturn('fakeToken')
      const fetchSpy = expect.spyOn(fetchWrapper, 'fetchWrapper')
        .andReturn({then: callback => {callback({json: () => {}})}})

      const url = 'http://example.com/test'
      httpGet(url)

      expect(fetchSpy).toHaveBeenCalled()
      expect(fetchSpy.calls[0].arguments[0]).toBe(url)
      expect(fetchSpy.calls[0].arguments[1].headers['Content-Type']).toBe('application/json')
      expect(fetchSpy.calls[0].arguments[1].headers['Accept']).toBe('application/json')
      expect(fetchSpy.calls[0].arguments[1].headers['x-auth-token']).toBe('fakeToken')
    })
  })

  describe('httpLogin', () => {
    it('calls url with correct options', () => {
      expect.spyOn(localStorage, 'setToken')

      const returnedData = {
        headers: {get: () => {}},
        json: () => {}
      }

      const fetchSpy = expect.spyOn(fetchWrapper, 'fetchWrapper')
        .andReturn({then: callback => {callback(returnedData)}})

      httpLogin('http://example.com/test', 'guest', 'secret')

      expect(fetchSpy).toHaveBeenCalled()
      expect(fetchSpy.calls[0].arguments[0]).toBe('http://example.com/test')
      expect(fetchSpy.calls[0].arguments[1].headers['Authorization']).toBe(`Basic ${base64.encode('guest:secret')}`)
      expect(fetchSpy.calls[0].arguments[1].headers['Content-Type']).toBe('application/json')
      expect(fetchSpy.calls[0].arguments[1].headers['Accept']).toBe('application/json')
      expect(fetchSpy.calls[0].arguments[1].method).toBe('POST')
    })

    it('sets x-auth-token in response header to localStorage', () => {
      const setTokenSpy = expect.spyOn(localStorage, 'setToken')

      const returnedData = {
        headers: {get: () => 'fakeToken'},
        json: () => {}
      }

      expect.spyOn(fetchWrapper, 'fetchWrapper')
        .andReturn({then: callback => {callback(returnedData)}})

      httpLogin('http://example.com/test', 'guest', 'secret')

      expect(setTokenSpy).toHaveBeenCalled()
      expect(setTokenSpy.calls[0].arguments[0]).toBe('fakeToken')
    })

    it('returns body as json', () => {
      expect.spyOn(localStorage, 'setToken')
      const getJsonSpy = expect.createSpy()

      const returnedData = {
        headers: {get: () => {}},
        json: getJsonSpy
      }

      const fetchSpy = expect.spyOn(fetchWrapper, 'fetchWrapper')
        .andReturn({then: callback => {callback(returnedData)}})

      httpLogin('http://example.com/test', 'guest', 'secret')

      expect(getJsonSpy).toHaveBeenCalled()
    })
  })
})
