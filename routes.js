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
  if(gender == 'male') {
    return db.getMalePictures(gender)
    .then((dragons) => {
      res.render('pictures', {dragons})
    })
  } else if (gender == 'female') {
    return db.getFemalePictures(gender)
    .then((dragons) => {
      res.render('pictures', {dragons})
    })
  }
})


module.exports = router
