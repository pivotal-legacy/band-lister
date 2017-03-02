import expect from 'expect'
import * as webdriverio from 'webdriverio'

import SeleniumProcessOperator from '../helpers/SeleniumProcessOperator'
import ClientProcessOperator from '../helpers/ClientProcessOperator'
import ServerProcessOperator from '../helpers/ServerProcessOperator'

let selenium, client, server

before(async () => {
  console.log("Starting selenium...")
  selenium = new SeleniumProcessOperator()
  await selenium.start()

  console.log("Starting client...")
  client = new ClientProcessOperator()
  await client.start()

  console.log("Starting server...")
  server = new ServerProcessOperator()
  await server.start()
})

after(async () => {
  console.log("Stopping processes...")
  server.stop()
  client.stop()
  selenium.stop()
  console.log("All processes stopped.")
})

describe('integration tests', () => {
  let browser
  beforeEach(async () => {
    browser = webdriverio.remote().init().url('http://localhost:7000')
  })

  afterEach(async () => {
    await browser.end()
  })

  it('has the correct header', async () => {
    const header = await browser.getText('h1')
    expect(header).toBe('Band Lister')
  })

  it('displays band names in a table', async () => {
    const nameCellText = await browser.getText('.name')
    expect(nameCellText).toBe('The Beatles')
  })
})
