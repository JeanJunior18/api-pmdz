const Booklet = require('../models/Booklets');
const User = require('../models/Users');

const jwt = require('jsonwebtoken');

module.exports = {
  async index(req, res){
    const book = await Booklet.findAll();
    
    return res.status(200).json(book)
  },
  async authorBooks(req, res){
    const authorId = req.params.author_id;
    const userBooks = await User.findByPk(authorId, {
      include: { association: 'booklets' }
    })
    const books = await Booklet.findAll({where: {authorId}})
    return res.status(200).json(userBooks)
  },
  async store(req, res){
    const authorId = req.params.author_id;

    if(authorId != jwt.decode(req.headers.authorization).id)
      return res.status(403).json({error: 'Access Denied!'})

    const { title, imageLink, downloadlink } = req.body
  
    
    const user = await User.findByPk(authorId);
    if(!user) 
      return res.status(400).json({error: 'User not found'})

    
    const author = `${user.lastname.toUpperCase()}, ${user.firstname}`
    const data = { title, imageLink, downloadlink, authorId, author}
    const book = await Booklet.create(data)


    return res.json(book)
  }
}