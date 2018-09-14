const express = require('express');
const bountyRouter = express.Router()
const bounties = require('../models/bounty')




// Get all bounties
bountyRouter.get('/', (req, res) => {
    bounties.find((err, allTheBounties) => {
        if(err) res.status(500).send({msg: "An error occured in the server."})
        return res.status(200).send(allTheBounties)
    })
})

// Get a single bounty
bountyRouter.get('/:id', (req, res) => {
    bounties.findById(req.params.id, (err, foundBounty) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(foundBounty)
    })
})

// Post a new bounty
bountyRouter.post('/', (req, res) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, newSavedBounty) => {
        if (err) return res.status(500).send(err)
        return res.status(201).send({newSavedBounty: newSavedBounty, msg: "Bounty successfully posted."})
    })
})

// Update an existing bounty
bountyRouter.put('/:id', (req, res) => {
    bounties.findOneAndUpdate(
        { _id: req.params.id }, //Find this object  y it's ID
        req.body,               //Update it with the user's object in req.body
        { new: true },          //Request the updated object back in the response
        (err, updatedBounty) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(updatedBounty)
        }) 
})

bountyRouter.delete('/:id', (req, res) => {
    bounties.findOneAndRemove(
        { _id: req.params.id },
        (err, deletedBounty) => {
            if (err) return res.status(500).send(err)
            return res.status(204).send({ msg: "Bounty successfully deleted", deletedBounty})
        })
})

module.exports = bountyRouter