import * as routes from './routes'
import * as methods from '../services/methods'

export const init = (app) => {
  app.post('/login', routes.login)
  app.get('/_health', routes.health)
  app.get('/cidr-to-mask', routes.cidrToMask)
  app.get('/mask-to-cidr', routes.maskToCidr)
}
// health
export const health = (req, res, next) => {
  res.send('OK')
  next()
}
// login
export const login = async (req, res, next) => {
  const username = req.body.username
  const password = req.body.password

  const response = {
    data: await methods.loginFunction(username, password)
  }
  // console.log(response)
  res.send(response)
  next()
}
// cidrToMaskFunction
export const cidrToMask = (req, res, next) => {
  const value = req.query.value ? req.query.value : false
  if (!value) {
    res.send(422, 'No value provided')
  } else {
    const response = {
      function: 'cidrToMask',
      input: value,
      output: methods.cidrToMaskFunction(value)
    }
    res.send(response)
    next()
  }
}
// maskToCidr
export const maskToCidr = (req, res, next) => {
  const value = req.query.value ? req.query.value : false
  if (!value) {
    res.send(422, 'No value provided')
  } else {
    const response = {
      function: 'maskToCidr',
      input: value,
      output: methods.maskToCidrFunction(value)
    }
    res.send(response)
    next()
  }
}
