import {takeLatest,all,fork} from 'redux-saga/effects';

import * as types from '../constants';
import getDataSaga from './getDataSaga';
import submitDataSaga from './submitDataSaga';
import loginDataSaga from './loginDataSaga';

function* watchGetData() {
	yield takeLatest(types.GET_DATA,getDataSaga)
}

function* watchSubmitData() {
	yield takeLatest(types.SUBMIT_DATA,submitDataSaga)
}

function* watchLoginData() {
	yield takeLatest(types.LOGIN_DATA,loginDataSaga)
}

export default function* rootSaga() {
	yield all([fork(watchGetData),fork(watchSubmitData),fork(watchLoginData)])
}
