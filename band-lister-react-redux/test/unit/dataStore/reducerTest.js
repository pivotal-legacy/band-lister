import expect from 'expect'

import * as reducer from '../../../app/js/dataStore/reducer'
import * as localStorage from '../../../app/js/globalWrappers/localStorageWrapper'

describe('reducer', () => {
  beforeEach(() => expect.restoreSpies())
  describe('bands reducer', () => {
    it('sets bands data to nextState on successful action', () => {
      const bands = [
        {id: 1, name: 'The Beatles', memberCount: 4},
        {id: 2, name: 'Radiohead', memberCount: 5}
      ]
      const action = {
        type: 'FETCH_BANDS_SUCCESS',
        data: bands
      }

      const nextState = reducer.bands(undefined, action)

      expect(nextState).toEqual(bands)
    })

    it('sets default bands data to nextState on unsuccessful action', () => {
      const action = {
        type: 'FETCH_BANDS_FAILURE',
        data: [{id: 0, name: 'Weird data', memberCount: 0}]
      }

      const nextState = reducer.bands(undefined, action)

      expect(nextState).toEqual([])
    })
  })

  describe('current band reducer', () => {
    it('sets current band data to nextState on successful action', () => {
      const band = {id: 1, name: 'The Beatles', memberCount: 4}
      const action = {
        type: 'FETCH_BAND_SUCCESS',
        data: band
      }

      const nextState = reducer.currentBand(undefined, action)

      expect(nextState).toEqual(band)
    })

    it('sets default band data to nextState on unsuccessful action', () => {
      const action = {
        type: 'FETCH_BAND_FAILURE',
        data: {id: 0, name: 'Weird data', memberCount: 0}
      }

      const nextState = reducer.currentBand(undefined, action)

      expect(nextState).toEqual({})
    })
  })

  describe('currentUser reducer', () => {
    it('sets current user to nextState on success', () => {
      const setTokenSpy = expect.spyOn(localStorage, 'setToken')

      const type = 'LOGIN_SUCCESS'
      const data = {username: 'test user'}
      const action = { type, data }

      const nextState = reducer.currentUser(undefined, action)

      expect(nextState).toEqual({username: 'test user'})
    })
  })
})
