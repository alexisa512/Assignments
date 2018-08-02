var form = document.baddies

form.addEventListener("submit", function (e) {
    e.preventDefault()

    var numberOfGoombas = form.goombaNumber.value * 5
    var numberOfBobOmbs = form.bobOmbsNumber.value * 7
    var numberOfCheepCheeps = form.cheepCheepsNumber.value * 11

    document.getElementById("returnBaddies").textContent = ('Total Cost: ' + (Number(numberOfGoombas) + Number(numberOfBobOmbs) + Number(numberOfCheepCheeps)) + " coins")
})