import {spawn} from 'child_process'

export default class SeleniumProcessOperator {
  async start() {
    this.process = spawn('make', ['startSelenium'])

    return await new Promise((resolve, reject) => {
      this.process.stdout.on('data', data => {
        if (data.includes('Selenium started')) {
          resolve('Selenium ready!')
        }
      })
      setTimeout(() => {
        reject(new Error('Selenium failed to start.'))
      }, 5000)
    })
  }

  stop() {
    spawn('make', ['stopSelenium'])
  }
}
