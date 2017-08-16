import { mapDispatchToProps } from '../../../app/js/login/LoginPageContainer'
import expect from 'expect'
import * as actions from '../../../app/js/actions'

describe('LoginPageContainer', () => {
  beforeEach(() => expect.restoreSpies())
  describe('mapDispatchToProps', () => {
    it('calls loginThenDispatch with correct arguments', () => {
      const dispatchSpy = expect.createSpy()
      const dispatch = mapDispatchToProps(dispatchSpy)
      const loginThenDispatchSpy = expect.spyOn(actions, 'loginThenDispatch')

      dispatch.login('test user', 'test password')

      expect(loginThenDispatchSpy).toHaveBeenCalled()
    })
  })
})
