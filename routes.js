const express = require('express')

const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
res.redirect('/home')
})

router.get('/home', (req,res) => {
  res.render('')
})

module.exports = router
