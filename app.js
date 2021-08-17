const pp = require('puppeteer')

start = async () => {
  console.log('Init Sequence')
  const b = await pp.launch({ headless: false })
  const p = await b.newPage()
  await p.goto('https://popcat.click/', { waitUntil: 'networkidle0' })
  console.log('Ready?')

  for (let i = 0; i < 1000000; i++) {
    await p.click('[id="app"]')
  }
}

start()