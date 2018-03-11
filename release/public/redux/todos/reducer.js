import { combineReducers } from 'redux';
import { getType } from 'typesafe-actions';
import { addTodo, toggleTodo, changeFilter } from './actions';
export const todosReducer = combineReducers({
    isFetching: (state = false, action) => {
        switch (action.type) {
            default: return state;
        }
    },
    errorMessage: (state = '', action) => {
        switch (action.type) {
            default: return state;
        }
    },
    todos: (state = [], action) => {
        switch (action.type) {
            case getType(addTodo):
                return [...state, action.payload];
            case getType(toggleTodo):
                return state.map((item) => item.id === action.payload
                    ? Object.assign({}, item, { completed: !item.completed }) : item);
            default: return state;
        }
    },
    todosFilter: (state = '', action) => {
        switch (action.type) {
            case getType(changeFilter):
                return action.payload;
            default: return state;
        }
    },
});
import { $call } from 'utility-types';
import * as actions from './actions';
const returnsOfActions = Object.values(actions).map($call);
//# sourceMappingURL=reducer.js.map