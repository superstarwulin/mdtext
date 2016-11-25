import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App';
import reducer from './reducer';

// store有redux提供的createstore方法生产，该方法接受reducer作为参数。
// 为了把store传入组件，必须使用redux提供的provider在组件外包一层。

// Store
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body.appendChild(document.createElement('div'))
);
