var basic = document.travelInfo

basic.addEventListener("submit", function(e){
    e.preventDefault()

    var firstName = basic.firstname.value
    var lastName = basic.lastname.value
    var age = basic.age.value
    var gender = basic.gender.value
    var destination = basic.travelDestination.value
    var dietArr = []
    var diet = document.querySelectorAll("input[name=diet]:checked")
    for(var i = 0; i < diet.length; i++){
        dietArr.push(diet[i].value)
    }
    alert('Firstname: ' + firstName + '\nLast Name: ' + lastName + '\nGender: ' + gender + '\nDestination: ' + destination + '\nDietary Restrictions: ' + dietArr)
})

