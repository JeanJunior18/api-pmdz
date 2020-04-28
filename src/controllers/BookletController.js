const Booklet = require('../models/Booklets');
const User = require('../models/Users');

module.exports = {
  async index(req, res){
    const authorId = req.params.author_id;
    const userBooks = await User.findByPk(authorId, {
      include: { association: 'booklets' }
    })
    const books = await Booklet.findAll({where: {authorId}})
    return res.status(200).json(userBooks)
  },
  async store(req, res){
    const authorId = req.params.author_id;
    const { title, imageLink, downloadlink } = req.body
    console.log(req.body)
    
    const user = await User.findByPk(authorId);
    if(!user) 
      return res.status(400).json({error: 'User not found'})

    const book = await Booklet.create({ title, imageLink, downloadlink, authorId })

    return res.json(book)
  }
}