// Basic Requirements (Bronze)
axios.get("https://api.vschool.io/alexis/todo").then(function(response){
    console.log(response.data)
    var data = response.data
    view(data)
})
var container = document.getElementById("container")
// The user can see their current list of todos. (Preferably they show up as soon as the page loads.)
    // find a way to display it on page load
    function view (arr){
        arr.forEach(function(todo){
            var div = document.createElement("div")
            container.appendChild(div)
            div.setAttribute("id", todo._id)
            div.innerHTML =     `
                                <h3>${todo.title}</h3>
                                <p>${todo.description}</p>
                                <p>$${todo.price}</p>
                                <img id="image" src="${todo.imgUrl}"/>
                                <br>
                                <input type="checkbox" onclick="strikethrough('${todo._id}')" name="done"> 
                                <span>Complete</span>
                                 <br>
                                <input type="checkbox" onclick="noStrikethrough('${todo._id}')" value="incomplete" name="done"> Incomplete
                                <br>
                                <button onclick="deleteTodo('${todo._id}')">Delete</button>
                                `
            div.classList.add("todoItem");                    
        })
    }


    // append a child to something in the index.
        // show the title, description, and price
        // image is optional
// The user can add new todos to their list. The new item should be posted to the todo API so a future reload of the page will still display that new todo item.
document.addNewForm.addEventListener("submit", function (event){
    event.preventDefault();
    var newTodo = {};
    newTodo.title = addNewForm.title.value;
    newTodo.description =addNewForm.description.value;
    newTodo.price = addNewForm.price.value;
    newTodo.imgUrl = addNewForm.image.value;
    axios.post("https://api.vschool.io/alexis/todo", newTodo).then(function(response){
        console.log(response);
    });
    alert("Your item has been added. Please refresh the page.");
});
// A user should be able to give the item a price.
// A user should be able to give the item a description.
// A user should be able to attach an imgUrl to the item (and if there is an imgUrl, the image should be displayed)


// Tier two requirements (Silver)
// Each todo will have a checkbox where it can be marked complete or incomplete
// If a todo item is complete, it should have a strikethrough line on it



// Tier three requirements (Gold)
// A user will be able to delete todos (this is different from marking a todo as "completed")

function deleteTodo(id){
    axios.delete(`https://api.vschool.io/alexis/todo/${id}`)
    alert("Your item has been deleted. Please refresh the page.")
}

function strikethrough (id){
    document.getElementById(id).classList.add("strikethrough")
}

function noStrikethrough (id) {
    document.getElementById(id).classList.remove("strikethrough")
}