const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getPictures,
  randomName,
  getDragons,
  randomNameAll
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function getPictures(gender, db = connection) {
  return db('dragons').where('gender', gender).select()
}


function randomName(gender,db = connection) {
  return db('dragons')
    .select('firstName', 'lastName')
    .where('gender', gender)
    .orderByRaw('random()')
    .limit(1)
}

function randomNameAll(db = connection) {
  return db('dragons').select('firstName', 'lastName').orderByRaw('random()').limit(1)
}

function getDragons(db = connection) {
  return db('dragons').select()
}