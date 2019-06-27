import * as serviceWorker from './serviceWorker';
//import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './reducer/store'
import { Provider } from 'react-redux'
//import { render } from 'react-dom'
import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'



ReactDOM.render(
  <Provider store={store}>
     <Router history={history}>
      
     <div>
        <App/>
      </div>
      
    </Router>
  </Provider>,
   document.getElementById('root')
  )


serviceWorker.unregister();
