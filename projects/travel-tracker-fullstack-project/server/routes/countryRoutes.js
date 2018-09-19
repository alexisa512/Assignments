const express = require('express')
const countryRouter = express.Router()
const Country = require('../models/country')



countryRouter.route('/')
    .get((req, res) => {
        Country.find((err, countries) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(countries)
        })
    })
    .post((req, res) => {
        const newCountry = new Country(req.body)
        newCountry.save((err, newSavedCountry) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(newSavedCountry)
        })
    })

countryRouter.route('/:id')
    .get((req, res) => {
        Country.findOne({ _id: req.params.id }, (err, foundCountry) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(foundCountry)
        })
    })

    .put((req, res) => {
        Country.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true },
            (err, updatedCountry) => {
                if(err) return res.status(500).send(err)
                return(res.status)(200).send(updatedCountry)
            })
        })
    
    .delete((req, res) => {
        Country.findOneAndRemove({ _id: req.params. id }, (err, deletedCountry) => {
            if(err) return res.status(500).send(err)
            return(res.status)(200).send(deletedCountry)
        })
    })

module.exports = countryRouter