const express = require('express')

const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
res.redirect('/home')
})

router.get('/home', (req,res) => {
  res.render('index')
})

router.get('/:gender/dragon-pictures', (req,res) => {
  var gender = req.params.gender
  return db.getPictures(gender)
  .then((dragons) => {
    res.render('pictures', {dragons})
  })
})

router.get('/:gender/dragon-names', (req, res) => {
  res.send('hello world')
})


module.exports = router
