import config from '../../config/config.mjs'
import jwt from 'jsonwebtoken'

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) return res.sendStatus(401)
  jwt.verify(token, config.jwtSecret, (err, user) => {
    if (err) return res.sendStatus(403)
    const { id } = user
    req.user = id
    next()
  })
}

export default authenticateToken