var math = document.adding

math.addEventListener("submit", function(event) {
    event.preventDefault();

    var num1 = math.number1.value
    var num2 = math.number2.value

    document.getElementById ("addresults").textContent = (Number(num1) + Number(num2))
})

var sub = document.subtracting

sub.addEventListener("submit", function(event){
    event.preventDefault();

    var sub1 = sub.subtract1.value
    var sub2 = sub.subtract2.value

    document.getElementById ("subresults").textContent = (Number(sub1) - Number(sub2))
})

var mult = document.multiplying

mult.addEventListener("submit", function(event){
    event.preventDefault();

    var mult1 = mult.multiply1.value
    var mult2 = mult.multiply2.value

    document.getElementById ("multresults").textContent = (Number(mult1) * Number(mult2))
})

