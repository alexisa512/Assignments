import React from 'react';

const Pet = (props) => {
    console.log(props)
    return (
        <div>
        <h3>Pet Name: {props.name}</h3>
        <h4>Breed: {props.breed}</h4>
        </div>
    )
}

export default Pet;