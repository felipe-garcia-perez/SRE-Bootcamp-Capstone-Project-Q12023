import Config from 'config'
import app from './server'

const config = Config

app.listen(config.port, function () {
  console.log('listening at', config.port)
})
