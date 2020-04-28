const { Model, DataTypes } = require('sequelize');

class Users extends Model{
  static init(sequelize){
    super.init({
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },{
      sequelize
    })
  }
  static associate(model){
    this.hasMany(model.Booklets, { foreignKey: 'authorId', as:'booklets' })
  }
}
module.exports = Users;