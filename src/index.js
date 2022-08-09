import React from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './Components/App';

import store from './Store/store';
import { Provider } from 'react-redux';

import './styles/reset.css';
import './styles/main.css';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
