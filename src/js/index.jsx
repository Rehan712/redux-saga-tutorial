import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {Provider} from 'react-redux';

import rootSaga from './sagas'; // we have imported saga function which forks all the sagas
import rootReducer from './reducers'; // we have imported all the reducers with in one reducer file with combineReducers

const sagaMiddleware=createSagaMiddleware();

const store=createStore(rootReducer,
	 process.env.NODE_ENV !== 'production' &&
    window.devToolsExtension &&
    window.devToolsExtension(),
	process.env.NODE_ENV !== 'production' ?
	applyMiddleware(sagaMiddleware,logger) :
	applyMiddleware(sagaMiddleware)
	)

	sagaMiddleware.run(rootSaga)  // Here we run the rootSaga function with sagaMiddleware

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#app')
	)