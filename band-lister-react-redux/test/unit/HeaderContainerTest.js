import { mapStateToProps } from '../../app/js/HeaderContainer'
import expect from 'expect'

describe('HeaderContainer', () => {
  describe('mapStateToProps', () => {
    it('sets currentUser with username of Guest by default', () => {
      const nextState = mapStateToProps({})

      expect(nextState.currentUser).toEqual({username: 'Guest'})
    })

    it('sets currentUser to currentUser in state', () => {
      const nextState = mapStateToProps({currentUser: {username: 'logged in user'}})

      expect(nextState.currentUser).toEqual({username: 'logged in user'})
    })
  })
})
