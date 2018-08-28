// Build a simple react app with an input box, an <h1>, a button, and an ordered list. The user will type names into the input box.

// When the user types in the input box, the <h1> should update to show the same text as the input box.

// When the user clicks the button, the value of the input box should be added to a running list of names that have been previous entered. (Hint: you'll need to set state and map over an array to do this).

import React from 'react';

class Form extends React.Component {
    constructor (){
        super()
        this.state = {
            name: '',
            age: '',
        }
    }




    render(){
        return 
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeHolder="Full Name"
                    value={this.state.name}
                    onChange={this.handleChange}/> 
                
                <input 
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={this.state.age}
                    onChange={this.handleChange}/>
                
                <button>Submit</button>
                <h1>Name: {this.state.name}</h1>
                



            </form>    
    }
}

export default Form;




// <form onSubmit={this.handleSubmit}>
// <input type="text" name='myName' placeholder='Full Name' value={this.state.myName} onChange={this.handleChange}  />
// <input type="text" name='age' placeholder='Age' value={this.state.age} onChange={this.handleChange} />
// <button>Submit</button>
// <h1>Name: {this.state.myName}</h1>
// <h1>Age: {this.state.age}</h1>
// </form>