import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getCountries} from '../redux';

class Wishlist extends Component {
  constructor(){
    super()

    this.state = {
      searchTerm: ''
    }
  }

  // handlechange w/
   
    componentDidMount(){
        this.props.getCountries()
    }


  render() {
    console.log(this.props.countries)

    return (
      <div>
        <div>Add country to wishlist</div>
        <form>
            <input type="text" placeholder="Country"/> //onchange in input
            <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(state=>state, {getCountries} )(Wishlist)

    // this.state.countries.map(country => {
    //     let newCountry = {
    //         name: country.name,
    //         capital: country.capital,
    //         region: country.region,
    //         subregion: country.subregion,
    //         languages: country.languages.map(language => {
    //             return language.name
    //         }),
    //         currencies: country.currencies.map(currency => {
    //             return currency.name
    //         }),
    //         demonym: country.demonym
    //     }
    //     axios.post('/country', newCountry).then(res => {

    //     })
    // })