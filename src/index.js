// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div className="App">
        <header className="Ninja-header">
            <h1 className="ninja">Ninja Stark</h1>
          </header>
          <App />
        </div>
  </Provider>
  , document.getElementById('root'));