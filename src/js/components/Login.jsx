import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Input,Button} from 'semantic-ui-react'

class Login extends React.Component{
	render(){
		const {
			inputData,
			changeLoginName,
			changeLoginPassword,
			resetLoginState,
			loginData
		}=this.props;
		console.log('this is input Data from Login ',inputData)
		return (
			<div className="login">
				<div className="loginForm">
					<div className="textField">
						<Input
						 label="Name" 
						 value={inputData.name} 
						 onChange={e=>changeLoginName(e.target.value)} 
						/>
					</div>
					<div className="textField">
						<Input
						 label="Password" 
						 value={inputData.password} 
						 onChange={e=>changeLoginPassword(e.target.value)}
						/>
					</div>
					<div className="textField">
						<Button onClick={
							e=>{
								loginData(inputData);
								resetLoginState();
							}	
						}>
						Login
						</Button>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		inputData:state.inputLoginData
	}
}

export default connect(mapStateToProps,{
		changeLoginName:actions.changeLoginName,
		changeLoginPassword:actions.changeLoginPassword,
		resetLoginState:actions.resetLoginState,
		loginData:actions.loginData
})(Login)