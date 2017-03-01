import expect from 'expect'

import * as reducer from '../../app/js/reducer'

describe('reducer', () => {
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

  describe('band reducer', () => {
    it('sets band data to nextState on successful action', () => {
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
})
