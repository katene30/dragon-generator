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
  if(gender == male) {
    return db.getPictures
    res.render('pictures', images)
  } else if (gender == female) {
    res.render('pictures', images)
  }

})


module.exports = router
