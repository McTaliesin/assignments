import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import SomeComponent from './components/SomeComponent/SomeComponent';
import './styles/styles.css';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render(
  <Provider store={store}>
      <SomeComponent />
  </Provider>,
  document.getElementById('app')
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
