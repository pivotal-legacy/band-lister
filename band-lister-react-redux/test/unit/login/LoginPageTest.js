import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'
import LoginPage from '../../../app/js/login/LoginPage'

describe('LoginPage', () => {
  beforeEach(() => expect.restoreSpies())

  describe('view', () => {
    let loginPage
    beforeEach(() => {
      loginPage = shallow(<LoginPage/>)
    })

    it('displays title', () => {
      expect(loginPage.find('.title').text()).toBe('login page')
    })

    it('displays form', () => {
      expect(loginPage.find('form').length).toBe(1)
    })
  })

  describe('behavior', () => {
    let loginPage, loginSpy
    beforeEach(() => {
      loginSpy = expect.createSpy()
      loginPage = mount(<LoginPage login={loginSpy}/>)
    })

    it('submits form with username and password', () => {
      loginPage.find('.username input').simulate('change', {target: {name: 'username', value: 'special user'}})
      loginPage.find('.password input').simulate('change', {target: {name: 'password', value: 'top secret'}})

      loginPage.find('form').simulate('submit')

      expect(loginSpy).toHaveBeenCalled()
      expect(loginSpy.calls[0].arguments[0]).toBe('special user')
      expect(loginSpy.calls[0].arguments[1]).toBe('top secret')
    })
  })
})
