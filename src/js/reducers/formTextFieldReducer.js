import * as types from '../constants';

const initial={
	name:'',
	fatherName:'',
	age:'',
	address:''
}

export default function formTextFieldReducer(state=initial,action) {
	switch(action.type){
		case types.CHANGE_NAME:
			return {...state,name:action.payload}
		case types.CHANGE_FATHER_NAME:
			return {...state,fatherName:action.payload}
		case types.CHANGE_AGE:
			return {...state,age:action.payload}
		case types.CHANGE_ADDRESS:
			return {...state,address:action.payload}
		case types.RESET_STATE_FORM:
			return {name:'',fatherName:'',age:'',address:''}	
		default:
			return state				
	}
}
