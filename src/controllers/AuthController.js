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
        else
      if(await bcrypt.compare(password, user.password)){
        user.password = undefined;
        const token = generateToken({id: user.id});
      
        return res.status(200).json({user, token});
        
      }
      else{
        return res.json({error: 'Incorrect Password'});
    }
  }
}
