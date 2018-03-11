import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { countersReducer } from '@src/redux/counters';
import { todosReducer } from '@src/redux/todos';
export const rootReducer = combineReducers({
    router: routerReducer,
    counters: countersReducer,
    todos: todosReducer,
});
//# sourceMappingURL=root-reducer.js.map