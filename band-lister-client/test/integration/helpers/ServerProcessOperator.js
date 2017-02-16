import {spawn} from 'child_process'

export default class ServerProcessOperator {
  async start() {
    this.process = spawn('make', ['startIntegrationServer'])

    return await new Promise((resolve, reject) => {
      this.process.stdout.on('data', data => {
        if (data.includes('Started BandListerServerApplication')) {
          resolve('Server ready!')
        }
      })
      setTimeout(() => {
        reject(new Error('Server failed to start.'))
      }, 15000)
    })
  }

  stop() {
    spawn('make', ['stopIntegrationServer'])
  }
}
