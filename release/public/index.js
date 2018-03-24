"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var redux_1 = require("redux");
var index_1 = require("./reducers/index");
var Hello_1 = require("./components/Hello");
var store = redux_1.createStore(index_1.default);
var rootElement = document.getElementById('root');
// TODO Start using the actual login component instead of silly Hello.tsx
var render = function () { return ReactDOM.render(React.createElement(Hello_1.Hello, { compiler: 'TypeScript', framework: 'React' }), document.getElementById('tracked')); };
render();
store.subscribe(render);
//# sourceMappingURL=index.js.map