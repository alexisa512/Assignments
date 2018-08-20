// Components are functions that return some JSX ( HTML/JS )
// Components are always capitalized.
import React from 'react'
import HelloWorld from './HelloWorld'

const App = () => {
    return (
        <div>
        <HelloWorld/>
        <p>Nice to meet you</p>
        </div>
    )
}

export default App