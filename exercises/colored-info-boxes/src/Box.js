import React from 'react'
import SmallBox from './SmallBox'

const Box = (props) => {
    // console.log(props)
    const styles = {
        backgroundColor: props.color
   
    }

    return (
        <div style={styles}>
            <SmallBox title={props.title} subtitle={props.subtitle} /> 
        </div>
    )
}

export default Box