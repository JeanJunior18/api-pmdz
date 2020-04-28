const Sequelize = require('sequelize');

const DBconfig = require('../config/database');

const User = require('../models/Users');
const Booklet = require('../models/Booklets');

const sequelize = new Sequelize(DBconfig);

User.init(sequelize);
Booklet.init(sequelize);

User.associate(sequelize.models)
Booklet.associate(sequelize.models)



module.exports = sequelize;