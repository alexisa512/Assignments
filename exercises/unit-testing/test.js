var chai = require('chai')
var myFunctions = require('./app.js')
var addS = myFunctions.addS
var assert = chai.assert
// console.dir(assert)

//  describe,  it  //
// assert.equal (actual, expected) // Great for strings and numbers and booleans
// assert.deepEqual (actual, expected) // 


describe("Creat a function that adds an 's' to the end of every word in an array", function(){
    it("should end with an s", function(){
        assert.deepEqual(addS(['dog', 'cat', 'alligator']), ['dogs', 'cats', 'alligators'])
    })
    it("should not allow numbers into the array", function(){
        assert.equal(addS(['dog', 0, 3]), 'no numbers')
    })
    it("should not add an 's' if the word ends with an 's' already", function(){
        assert.deepEqual(addS(["dogs", "birds", "horses"]), ["dogs", "birds", "horses"])
    })
})