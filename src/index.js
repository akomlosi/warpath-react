import React from 'react';
import ReactDOM from 'react-dom';
import Combat from './Combat';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<Combat />
	</Provider>
	, document.getElementById('root'));
