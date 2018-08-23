import React from 'react';
import Pet from './Pet';

const Friend = (props) => {
    const petArray = props.pets.map((pet, i) => {
        return <Pet key={pet.name+i}
                       name={pet.name}
                       breed={pet.breed}
                       />
      });
    return (
        <div>
            <h1>Friend's Name: {props.name}</h1>
            <h3>Friend's Age: {props.age}</h3>
            {petArray}
        </div>
    );
}

export default Friend;