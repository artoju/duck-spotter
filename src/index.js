import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, } from 'redux';
import reducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
    );
