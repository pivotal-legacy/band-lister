import {spawn} from 'child_process'

export default class ClientProcessOperator {
  async start() {
    this.process = spawn('npm', ['run', 'startIntegrationClient'])

    return await new Promise((resolve, reject) => {
      this.process.stdout.on('data', data => {
        if (data.includes('webpack: Compiled successfully.')) {
          resolve('Client ready!')
        }
      })
      setTimeout(() => {
        reject(new Error('Client failed to start.'))
      }, process.env.NODE_SERVER_STARTUP_TIMEOUT)
    })
  }

  stop() {
    this.process.kill()
  }
}
