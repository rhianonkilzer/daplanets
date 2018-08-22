let router = require('express').Router()
let Stars = require('../models/star')

router.get('/', (req, res, next) => {
    Stars.find({})
        .then(stars => {
            return res.send(stars)
        })
        .catch(err => {
            return next(err)
        })
})

router.get('/:id', (req, res, next) => {
    Stars.findById(req.params.id)
        .then(stars => res.send(stars))
        .catch(next)
})


router.post('/', (req, res, next) => {
    Stars.create(req.body)
        .then(star => res.send(star))
        .catch(next)
})

router.put('/:id', (req, res, next) => {
    Stars.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send({
            message: 'Success'
        }))
        .catch(next)
})


router.delete('/:id', (req, res, next)=> {
    Stars.findByIdAndRemove(req.params.id)
    .then(() => res.send({
        message: 'succesfully dDHLORTEDDDDD star'
    }))
    .catch(next)
})

module.exports = router