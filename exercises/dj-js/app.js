var square = document.getElementsByClassName("square")
console.log(square)
// Blue when the mouse hovers over the square

square[0].addEventListener("mouseover", function() {
    square[0].style.backgroundColor = "blue"
})

// Red when the mouse button is held down over the square
// Yellow when the mouse button is let go over the square
// Green when the mouse is double clicked in the square
// Orange when the mouse scroll is used somewhere in the window (not just over the square).


window.addEventListener("keydown", function(event) {
    if(event.code === "KeyB"){
        display.style.backgroundColor = "Blue"
    }
})