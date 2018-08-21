import React from 'react';

const SmallBox = (props) => {
    const styles = {
        fontSize: '30px'
    }
    return (
        <span style={styles}>{props.title} {props.subtitle}</span>
    )
}

export default SmallBox;