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
  var gender = req.params.gender
  var id = req.params.id
  var image = req.query.image
  return db.randomName(gender)
  .then((randy) => {
    randy[0].gender = gender
    randy[0].id = id
    randy[0].image = image
    res.render('names',randy[0])
  })
})

router.post('/:gender/add', (req,res) => {
  var newDragon = {
    image:req.query.image,
    firstName:req.body.firstName,
    lastName:req.body.lastName
  }
  res.render('dragon', newDragon)
})

module.exports = router
