import expect from 'expect'
import base64 from 'base-64'
import { httpGet, httpLogin } from '../../app/js/fetcher'
import * as fetchWrapper from '../../app/js/globalWrappers/fetchWrapper'

describe('fetcher', () => {
  beforeEach(() => expect.restoreSpies())

  describe('httpGet', () => {
    it('calls url with correct options', () => {
      const fetchSpy = expect.spyOn(fetchWrapper, 'fetchWrapper')
      .andReturn({then: callback => {callback({json: () => {}})}})

      const url = 'http://example.com/test'
      httpGet(url)

      expect(fetchSpy).toHaveBeenCalled()
      expect(fetchSpy.calls[0].arguments[0]).toBe(url)
      expect(fetchSpy.calls[0].arguments[1].headers['Content-Type']).toBe('application/json')
      expect(fetchSpy.calls[0].arguments[1].headers['Accept']).toBe('application/json')
    })
  })

  describe('httpLogin', () => {
    it('calls url with correct options', () => {
      const fetchSpy = expect.spyOn(fetchWrapper, 'fetchWrapper')
      .andReturn({then: callback => {callback({json: () => {}})}})

      const url = 'http://example.com/test'
      httpLogin(url, 'guest', 'secret')

      expect(fetchSpy).toHaveBeenCalled()
      expect(fetchSpy.calls[0].arguments[0]).toBe(url)
      expect(fetchSpy.calls[0].arguments[1].headers['Authorization']).toBe(`BASIC ${base64.encode('guest:secret')}`)
      expect(fetchSpy.calls[0].arguments[1].headers['Content-Type']).toBe('application/json')
      expect(fetchSpy.calls[0].arguments[1].headers['Accept']).toBe('application/json')
      expect(fetchSpy.calls[0].arguments[1].method).toBe('POST')
    })
  })
})
