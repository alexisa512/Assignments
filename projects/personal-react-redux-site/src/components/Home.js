import React from 'react';
import { connect } from 'react-redux';

import { getJokes } from '../redux';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<button onClick={this.props.getJokes}>Get Another Joke</button>
				{this.props.jokes}
			</div>
		)
	}
}
export default connect(state => state, { getJokes })(Home);