export default function Routes(app) {
  app.get('/hello', (req, res) => { res.send('Life is good!') })
  app.get('/', (req, res) => { res.send('Welcome to Web Development!') })
}
