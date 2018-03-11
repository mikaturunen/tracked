import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './rxjs-imports';
import store from './store';
import { Home, } from './containers';
const Root = (React.createElement(Provider, { store: store },
    React.createElement(Home, null)));
render(Root, document.getElementById('root'));
//# sourceMappingURL=index.js.map