import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore} from 'redux';

import Reducers from './reducers/index'
import { Hello } from './components/Hello';

const store = createStore(Reducers);
const rootElement = document.getElementById('root')

// TODO Start using the actual login component instead of silly Hello.tsx

const render = () => ReactDOM.render(
    <Hello
        compiler='TypeScript'
        framework='React'
        value={store.getState()}
    />,
    document.getElementById('tracked')
);

render();
store.subscribe(render);
