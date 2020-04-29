require('dotenv/config');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_TOKEN

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if(!authHeader) 
    return res.status(401).json({error: 'No token provided'});
  
  jwt.verify(authHeader, secret, (err, decoded)=>{
    if(err)
      return res.status(401).json({error: 'Invalid token'});

    req.userId = decoded.id
    return next()
  })
}