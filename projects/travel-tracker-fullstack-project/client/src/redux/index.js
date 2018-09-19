import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initState = {
    countries: [],
    filteredCountries: []
}

export const getCountries = () => {
    return function (dispatch){
        axios.get('/country').then(response => {
            dispatch({
                type: 'GET_COUNTRIES',
                data: response.data
            })
        })
    }
}

export const filterCountries = (searchTerm) => {
    return {
        type: ,
        searchTerm
    }
}

const reducer = (prevState = initState, action) => {
    switch(action.type){
        case 'GET_COUNTRIES':
            return {
                countries: action.data
            }
        case 'FILTER_COUNTRIES':
        // filter through the countries and save them to filteredCountries
        default: 
            return prevState
    }
}


export default createStore(reducer,applyMiddleware(thunk))