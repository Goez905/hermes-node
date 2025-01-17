import pkg from 'jsonwebtoken'
const { sign } = pkg
// jwt.io
export const generateJWT = (uid = '') => {
  return new Promise((resolve, reject) => {
    const payload = { uid } // Data
    sign(payload, process.env.SECRET_KEY, {
      expiresIn: '3m'
    }, (err, token) => {
      if (err) {
        reject(err)
      } else {
        resolve(token)
      }
    })
  })
}
