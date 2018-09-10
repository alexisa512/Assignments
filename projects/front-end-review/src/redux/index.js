import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const initState = {
    characters: []
}


export const getCharacters = () => {
    console.log("IT WORKS!")
    return function(dispatch){
        axios.get('insert URL here').then(response => {
            console.log(response.data)
            dispatch({
                type: "GET_CHARACTERS",
                data: response.data.results        
            })
        })
    }
}



const reducer = (prevState = initState, action) => {
    switch(action.type){
        case "GET_CHARACTERS":
            return {
                characters: action.data
            }
        default:
            return prevState
    }
}

export default createStore(reducer, applyMiddleware(thunk))