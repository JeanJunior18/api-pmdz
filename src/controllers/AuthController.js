require('dotenv/config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/Users');

function generateToken(params={}){
  return jwt.sign(params, process.env.JWT_TOKEN, {expiresIn: 86400});
}

module.exports = {
  async authenticate(req, res){
      const { email, password } = req.body

      const user = await User.findOne({where: {email}});
      
      if(!user) 
        return res.json({error: 'User not found'});
      if(!bcrypt.compare(password, user.password))
        return res.json({error: 'Incorrect Password'});
      user.password = undefined;
      const token = generateToken({id: user.id});
      
      return res.json({user, token});
  }
}