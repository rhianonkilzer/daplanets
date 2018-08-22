let router = require('express').Router()
let Moons = require('../models/moon')


router.get('/', (req, res, next) => {
    Moons.find({})
        .then(moons => {
            return res.send(moons)
        })
        .catch(err => {
            return next(err)
        })
})


router.get('/:id', (req, res, next) => {

})