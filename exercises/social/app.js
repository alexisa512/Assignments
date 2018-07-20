var dancer = [ 
        {
    name: "Lexi",
    age: 31,
    styles:["lindy hop","balboa", "charleston", "collegiate shag"],
    cities: [
        {
            name: "Seattle",
            state: "WA",
            venue:{
                name: "Camp Jitterbug",
                address: "123 Swing St",
                styles: ["lindy hop", "balboa"]
            }
        }, 
        {
            name: "Los Angeles",
            state: "CA",
            venue: {
                name: "Camp Hollywood",
                address: "123 Some Hotel",
                styles: ["lindy hop", "balboa", "collegiate shag", "charleston", "Fort Worth Dallas swingout"]
            }
        }
    ],
    namesOfVenues: function(){
        console.log(this.name + " has been to " + this.cities[0].venue.name + " & " + this.cities[1].venue.name)
    }
}, {
    name: "Joseph",
    age: 27,
    styles:["lindy hop","balboa", "charleston"],
    cities: [
        {
            name: "Seattle",
            state: "WA",
            venue:{
                name: "Camp Jitterbug",
                address: "123 Swing St",
                styles: ["lindy hop", "balboa"]
            }
        }, 
        {
            name: "Los Angeles",
            state: "CA",
            venue: {
                name: "Camp Hollywood",
                address: "123 Some Hotel",
                styles: ["lindy hop", "balboa", "collegiate shag", "charleston", "Fort Worth Dallas swingout"]
            }
        }
    ], 
    namesOfVenues: function(){
        console.log(this.name + " has been to " + this.cities[0].venue.name + " & " + this.cities[1].venue.name)
    }
}
]

dancer[0].namesOfVenues()
dancer[1].namesOfVenues()