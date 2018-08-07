var chai = require('chai')
var myFunctions = require('./app.js')
var people = myFunctions.people
var olderThan18 = myFunctions.olderThan18
var over18 = myFunctions.over18
var assert = chai.assert

describe ("Create a function that returns an array of people older than 18.", function(){
    it("returns an array of only people older than 18", function(){
        assert.deepEqual(olderThan18(people), over18)
    })
})