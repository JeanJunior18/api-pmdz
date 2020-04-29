const { Model, DataTypes } = require('sequelize');

class Booklets extends Model{
  static init(sequelize){
    super.init({
      title: DataTypes.STRING,
      imageLink: DataTypes.STRING,
      downloadlink: DataTypes.STRING,
      author: DataTypes.STRING
    },{
      sequelize
    })
  }
  static associate(model){
    this.belongsTo(model.Users, { foreignKey: 'authorId', as: 'BookAuthor' })
  }
}
module.exports = Booklets;