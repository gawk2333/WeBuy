const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])


const getMenu = (db = connection) => {
  return db('Menu')
}

module.exports = {
  getMenu
}
