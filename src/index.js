import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import config from './config'
import Store from './redux'

import { FirebaseAppProvider } from 'reactfire'
import { Provider } from 'react-redux'

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={config.firebaseConfig}>
    <Provider store={Store}>
      <App />
    </Provider>
  </FirebaseAppProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
