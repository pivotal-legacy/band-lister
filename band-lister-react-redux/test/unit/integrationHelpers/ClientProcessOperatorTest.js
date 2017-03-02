import expect from "expect"
import child_process from "child_process"
import mockSpawn from 'mock-spawn'

import ClientProcessOperator from "../../integration/helpers/ClientProcessOperator"
import { toEventuallyThrow } from '../helpers/asyncHelpers'

describe('ClientProcessOperator', () => {
  let subject, mySpawn

  it('shells out to start the front end client for integration tests', async () => {
    await startServer(successOutput)

    const firstCall = mySpawn.calls[0]
    expect(firstCall.command).toBe('npm')
    expect(firstCall.args).toEqual(['run', 'startIntegrationClient'])
  })

  it('start resolves when the front end is ready', async () => {
    await startServer(successOutput)

    const startupResult = await subject.start()

    expect(startupResult).toBe('Client ready!')
  })

  it('times out if the client does not start within the expected time frame', async () => {
    const didThrowError = await toEventuallyThrow(() => startServer(failureOutput), 'Client failed to start.')

    expect(didThrowError).toBe(true)
  })

  it('kills the front end client that was started for integration tests', async () => {
    await startServer(successOutput)
    const killSpy = expect.spyOn(subject.process, 'kill')

    subject.stop()

    expect(killSpy).toHaveBeenCalled()
  })

  const failureOutput = function() {
    this.stdout.write('stuff happening but not ready')
    this.stdout.write('stuff happening but not ready')
  }

  const successOutput = function() {
    this.stdout.write('stuff happening but not ready')
    this.stdout.write('stuff happening but not ready')
    this.stdout.write('webpack: Compiled successfully.')
  }

  const startServer = async stdout => {
    subject = new ClientProcessOperator()
    mySpawn = mockSpawn()
    child_process.spawn = mySpawn
    mySpawn.setStrategy(() => stdout)
    await subject.start()
  }
})
