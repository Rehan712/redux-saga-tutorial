import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions';

class Data extends React.Component{
	componentDidMount(){
		this.props.getData()
	}

	render(){
		console.log('this is the data',this.props.data)
		return (
			<div> This is the Data component</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		data:state.data
	}
}

export default connect(mapStateToProps,{getData:actions.getData})(Data)