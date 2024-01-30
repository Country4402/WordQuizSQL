import config from '../../config/config.mjs'
import jwt from 'jsonwebtoken'

const createJWT = user => {
  const token = jwt.sign({ id: user[0].email }, config.jwtSecret)
  return token
}

export default createJWT