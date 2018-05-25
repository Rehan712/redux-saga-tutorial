import * as types from '../constants';


// Actions for geting data 

export function getData() {
	return {
		type:types.GET_DATA
	}
}
export function getDataAttempt() {
	return {
		type:types.GET_DATA_ATTEMPT
	}
}
export function getDataSuccess(data) {
	return {
		type:types.GET_DATA_SUCCESS,
		payload:data
	}
}
export function getDataFail(error) {
	return {
		type:types.GET_DATA_FAIL,
		payload:error
	}
}


// ##########_______________##########

// Actions for the submit Data

export function submitData(data) {
	return {
		type:types.SUBMIT_DATA,
		payload:data
	}
}
export function submitDataAttempt() {
	return {
		type:types.SUBMIT_DATA_ATTEMPT
	}
}
export function submitDataSuccess() {
	return {
		type:types.SUBMIT_DATA_SUCCESS
	}
}
export function submitDataFail(error) {
	return {
		type:types.SUBMIT_DATA_FAIL,
		payload:error
	}
}

// ########____________############

// Actions for the onChange text boxes

export function changeName(value) {
	return {
		type:types.CHANGE_NAME,
		payload:value
	}
}
export function changeFatherName(value) {
	return {
		type:types.CHANGE_FATHER_NAME,
		payload:value
	}
}
export function changeAge(value) {
	return {
		type:types.CHANGE_AGE,
		payload:value
	}
}
export function changeAddress(value) {
	return {
		type:types.CHANGE_ADDRESS,
		payload:value
	}
}

export function resetStateForm() {
	return {
		type:types.RESET_STATE_FORM
	}
}

// ############_____________#############

// Actions for the Login

export function loginData(data) {
	return {
		type:types.LOGIN_DATA,
		payload:data
	}
}
export function loginDataAttempt() {
	return {
		type:types.LOGIN_DATA_ATTEMPT
	}
}
export function loginDataSuccess() {
	return {
		type:types.LOGIN_DATA_SUCCESS
	}
}
export function loginDataFail(error) {
	return {
		type:types.LOGIN_DATA_FAIL,
		payload:error
	}
}

// ############_________________#############

// Actions for Login textField onChange

export function changeLoginName(value) {
	return {
		type:types.CHANGE_LOGIN_NAME,
		payload:value
	}
}
export function changeLoginPassword(value) {
	return {
		type:types.CHANGE_LOGIN_PASSWORD,
		payload:value
	}
}

export function resetLoginState() {
	return {
		type:types.RESET_LOGIN_STATE
	}
}







