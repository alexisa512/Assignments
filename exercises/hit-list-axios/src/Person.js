import React from 'react';

const Person = (props) => {
    return(
        <div>
            <img src= { props.image } alt=""/>
            <h3> { props.name } </h3>
        </div>
    );
}

export default Person;