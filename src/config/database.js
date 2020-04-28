require('dotenv/config')
module.exports = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: 'drona.db.elephantsql.com',
  dialect: 'postgres',
  "dialectOptions": {
      ssl: true
  },
  define:{
      timestamps: true,
  },
}