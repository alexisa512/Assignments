import React, { Component } from 'react';
import Superhero from './Superhero';

class App extends Component {
    render() {
      const superHeroes = [
        {
          name: "Hulk",
          imgURL: "https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_768/hs1s0a9rz9kxe5o4h5yx",
          catchPhrase: "Hulk Smash!",
          showPhrase (phrase) {
             alert(phrase)
            }
        },

        {
          name: "The Thing",
          imgURL: "https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_768/s66ssd3za37ugs9px2bp",
          catchPhrase: "It's clobberin' time!",
          showPhrase (phrase) {
            alert(phrase)
          }
        },

        {
          name: "The Human Torch",
          imgURL: "https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_768/jlzdrq8m9facargtybfc",
          catchPhrase: "Flame on!",
          showPhrase (phrase) {
            alert(phrase)
          }
        },

        {
          name: "Spider Man",
          imgURL: "https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_768/b60dlfmpvd7bxyqvieat",
          catchPhrase: "My spidey senses are tingling.",
          showPhrase (phrase) {
            alert(phrase)
          }
        },
      ]

      const superHeroesArray = superHeroes.map((superHero, i) => {
        return <Superhero key={superHero.name+i}
                          name={superHero.name}
                          imgURL={superHero.imgURL}
                          catchPhrase={superHero.catchPhrase}
                          showPhrase={superHero.showPhrase} />
      })

       return (
          <div>
            {superHeroesArray}
         </div>
       );
     }
}

export default App;




