import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';

import Reducers from './reducers/index'
import { LoginWindow } from './components/login-window';

const store = createStore(Reducers);
const rootElement = document.getElementById('root')

// TODO Start using the actual login component instead of silly Hello.tsx

const render = () => ReactDOM.render(
  <LoginWindow
    password=''
    username=''
  />,
  document.getElementById('tracked')
);

render();
store.subscribe(render);
