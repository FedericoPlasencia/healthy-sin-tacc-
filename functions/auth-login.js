const jwt = require('jsonwebtoken')
exports.handler = async (event) => {
  if(event.httpMethod !== 'POST') return { statusCode:405, body:'Method not allowed' }
  try{
    const { email, password } = JSON.parse(event.body || '{}')
    if(!email || !password) return { statusCode:400, body:'Missing' }
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS){
      const token = jwt.sign({ email, role: 'admin' }, process.env.JWT_SECRET || 'devsecret', { expiresIn: '8h' })
      return { statusCode:200, body: JSON.stringify({ token }) }
    }
    return { statusCode:401, body: 'Invalid credentials' }
  }catch(err){ return { statusCode:500, body: String(err) } }
}
