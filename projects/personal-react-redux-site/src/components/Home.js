import React from 'react';
import { connect } from 'react-redux';

import { getJokes } from '../redux';
import decode from 'unescape';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='home'>
				<button onClick={this.props.getJokes}>Get Another Joke</button>
				<div id='joke'>{decode(this.props.jokes)}</div>
			</div>
		)
	}
}
export default connect(state => state, { getJokes })(Home);