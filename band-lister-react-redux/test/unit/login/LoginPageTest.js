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
})
