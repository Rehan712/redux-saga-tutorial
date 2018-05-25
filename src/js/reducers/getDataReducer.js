import * as types from '../constants';
const initial={
	isLoading:false,
	error:null,
	data:{}
}

export default function getDataReduder(state=initial,action) {
	switch(action.type){
		case types.GET_DATA_ATTEMPT:
			return {...state,isLoading:true}
		case types.GET_DATA_SUCCESS:
			return {...state,isLoading:false,data:action.payload}
		case types.GET_DATA_ATTEMPT:
			return {...state,isLoading:false,error:action.payload}
		default:
			return state			
	}
}