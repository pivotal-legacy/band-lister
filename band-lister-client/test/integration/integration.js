import expect from 'expect'
import * as webdriverio from 'webdriverio'

import ClientProcessOperator from './helpers/ClientProcessOperator'

describe('integration tests', () => {
  let client, browser
  beforeEach(async () => {
    client = new ClientProcessOperator()
    await client.start()

    browser = webdriverio.remote().init().url('http://localhost:7000')
  })

  afterEach(async () => {
    client.stop()
    await browser.end()
  })

  it('has the correct header', async () => {
    const header = await browser.getText('h1')
    expect(header).toBe('Band Lister')
  })
})
