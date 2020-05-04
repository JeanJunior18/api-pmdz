const User = require('../models/Users');
const bcrypt = require('bcryptjs');

module.exports = {
  async index(req, res){
    const users = await User.findAll();
    users.map(user => user.password = undefined)
    
    return res.status(200).json(users);
  },
  async store(req, res){
    const { firstname, lastname, email, password } = req.body;
    const verify = await User.findOne({where: {email}});

    if(verify)
      return res.status(403).json({error: 'Email já foi cadastrado'});
    
    const hash = await bcrypt.hash(password, 10)
    
    const user = await User.create({ firstname, lastname, email, password:hash });
    
    return res.json(user)
  }
}