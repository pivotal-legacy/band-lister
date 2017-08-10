import { httpGet, httpPost } from '../../app/js/fetcher'
import expect from 'expect'
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
      expect(fetchSpy.calls[0].arguments[1]).toEqual({})
    })
  })

  describe('httpPost', () => {
    it('calls url with correct options', () => {
      const fetchSpy = expect.spyOn(fetchWrapper, 'fetchWrapper')
      .andReturn({then: callback => {callback({json: () => {}})}})

      const url = 'http://example.com/test'
      const body = {username: 'guest', password: 'secret'}
      httpPost(url, body)

      expect(fetchSpy).toHaveBeenCalled()
      expect(fetchSpy.calls[0].arguments[0]).toBe(url)
      expect(fetchSpy.calls[0].arguments[1].body).toBe(body)
      expect(fetchSpy.calls[0].arguments[1].method).toBe('post')
    })
  })
})
