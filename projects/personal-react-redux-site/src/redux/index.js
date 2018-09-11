import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const initState = {
    jokes: []
}

export const getJokes = () => {
    return function(dispatch){
        axios.get('https://api.icndb.com/jokes/random').then(response => {
            dispatch({
                type: "GET_JOKES",
                data: response.data.value.joke
            })
        })
    }
}

const reducer = (prevState = initState, action) => {
    switch(action.type){
        case "GET_JOKES":
            return {
                jokes: action.data
            }
        default:
            return prevState
    }
}

export default createStore(reducer, applyMiddleware(thunk))