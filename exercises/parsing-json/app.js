var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function (arr) {  
    if (xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.responseText)
        parsePokemon(data)
    }
}

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);  
xhr.send();

function parsePokemon (data){
//     var display = document.getElementById("list")
    for(var i = 0; i < data.objects[0].pokemon.length; i++){
        var node = document.createElement("LI")
        var textnode = document.createTextNode(`${data.objects[0].pokemon[i].name}`)
        node.appendChild(textnode)
        document.getElementById("list").appendChild(node)
    }
        

}
