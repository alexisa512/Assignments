const express = require('express');
const inventoryRouter = express.Router();
const inventory = require('../models/inventory');

inventoryRouter.get('/', (req, res) => {
    inventory.find((err, allTheItems) => {
        if(err) res.status(500).send(err)
        return res.status(200).send(allTheItems)
    })
})

inventoryRouter.get('/:id', (req, res) => {
    inventory.findById(req.params.id, (err, foundItem) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(foundItem)
    })
})

inventoryRouter.post('/', (req, res) => {
    const newItem = new DataTransferItem(req.body)
    newItem.save((err, newSavedItem) => {
        if (err) return res.status(500).send(err)
        return res.status(201).send({ newSavedItem: newSavedItem, msg: "Item successfully posted."})
    })
})

inventoryRouter.put('/:id', (req, res) => {
    inventory.findOneAndUpdate(
        {_id: req.params.id },
        req.body,
        { new: true},
        (err, updatedItem) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(updatedItem)
        })
})

inventoryRouter.delete('/:id', (req, res) => {
    inventory.findByIdAndRemove(
        { _id: req.params.id },
        (err, deletedItem) => {
            if (err) res.status(500).send(err)
            return res.status(204).send({ msg: "Item successfully deleted.", deletedItem })
        })
})

module.exports = inventoryRouter

