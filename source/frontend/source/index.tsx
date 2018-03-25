import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/index'
import Application from './components/application';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('tracked')
);
