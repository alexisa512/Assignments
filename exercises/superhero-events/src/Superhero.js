import React from 'react';

const Superhero = (props) => {
    return (
    <div onClick={() => props.showPhrase(props.catchPhrase)}>
        <img src={props.imgURL} alt="" />
        <h2>{props.name}</h2>
    </div>
    )
    
}

export default Superhero;