import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Input,Button} from 'semantic-ui-react';

class SignIn extends React.Component{
	render(){
		const {
			inputData,
			changeName,
			changeFatherName,
			changeAge,
			changeAddress,
			submitData,
			resetStateForm
		}=this.props;
		console.log('this is input Data from Sign In ',inputData)
		return (
			<div className="signIn">
				<div className="form">
					<div className="textField">
						<Input 
						 label="Name"
						 value={inputData.name}
						 onChange={e=>{changeName(e.target.value)}}
						/>
					</div>
					<div className="textField">
						<Input
						 label="FatherName"
						 value={inputData.fatherName} 
						 onChange={e=>{changeFatherName(e.target.value)}}
						 />
					</div>
					<div className="textField">
						<Input
						 label="Age"
						 value={inputData.age} 
						 onChange={e=>{changeAge(e.target.value)}} 
						/>
					</div>
					<div className="textField">
						<Input
						 label="Address" 
						 value={inputData.address} 
						 onChange={e=>{changeAddress(e.target.value)}} 
						/>
					</div>
					<div className="textField">
						<Button color="red" onClick={
							e=>{
								submitData(inputData);
								resetStateForm();
							}
						}>
							Submit
						</Button>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		inputData:state.inputFormData
	}
}

export default connect(mapStateToProps,
	{
		changeName:actions.changeName,
		changeFatherName:actions.changeFatherName,
		changeAge:actions.changeAge,
		changeAddress:actions.changeAddress,
		submitData:actions.submitData,
		resetStateForm:actions.resetStateForm
	})(SignIn)