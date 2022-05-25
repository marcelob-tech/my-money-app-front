import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/app';
import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import Routes from './main/routes';
import { Provider } from 'react-redux';
import reducers from './main/reducers';

const reduxDevTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
	window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(multi, thunk, promise)(createStore)(
	reducers,
	reduxDevTools
);

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById('app')
);
