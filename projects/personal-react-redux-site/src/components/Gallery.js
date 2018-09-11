import React, { Component } from 'react'
import Chuck from './Chuck.png'

export default class Gallery extends Component {
    render() {
        return (
            <div className='videos'>
                <h1>Chuck Norris Videos</h1>
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/WYLvdLWkhk8">
                </iframe><br />
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/E6UTz_Doic8">
                </iframe><br />
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/oF0MVJnXUWo">
                </iframe><br />
                <img src={ Chuck } alt=""/>


            </div>
        )
    }
}



