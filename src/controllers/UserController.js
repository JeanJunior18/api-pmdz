const User = require('../models/Users');

module.exports = {
  async index(req, res){
    const users = await User.findAll()
    return res.status(200).json(users)
  },
  async store(req, res){
    const { firstname, lastname, email, password } = req.body;
    const verify = await User.findOne({where: {email}});
    if(verify)
      return res.status(400).json({error: 'Email já foi cadastrado'});

    const user = await User.create({ firstname, lastname, email, password });
    
    return res.json(user)
  }
}