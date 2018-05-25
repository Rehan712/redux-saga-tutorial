import {combineReducers} from 'redux';

import formTextFieldReducer from './formTextFieldReducer';
import getDataReducer from './getDataReducer';
import loginTextFieldReducer from './loginTextFieldReducer';

const rootReducer=combineReducers({
	inputFormData:formTextFieldReducer,
	data:getDataReducer,
	inputLoginData:loginTextFieldReducer
})

export default rootReducer;