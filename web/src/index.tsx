// import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import './polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './state';
import i18n from './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
