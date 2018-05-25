import * as types from '../constants';

const initial={
	name:'',
	password:''
}

export default function formTextFieldReducer(state=initial,action) {
	switch(action.type){
		case types.CHANGE_LOGIN_NAME:
			return {...state,name:action.payload}
		case types.CHANGE_LOGIN_PASSWORD:
			return {...state,password:action.payload}
		case types.RESET_LOGIN_STATE:
			return {name:'',password:''}	
		default:
			return state				
	}
}
