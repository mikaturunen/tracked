import { createAction } from 'typesafe-actions';
import cuid from 'cuid';
import { ADD_TODO, TOGGLE_TODO, CHANGE_FILTER, } from './types';
export const addTodo = createAction(ADD_TODO, (title) => ({
    type: ADD_TODO,
    payload: {
        id: cuid(),
        title: title,
        completed: false,
    },
}));
export const toggleTodo = createAction(TOGGLE_TODO, (id) => ({ type: TOGGLE_TODO, payload: id }));
export const changeFilter = createAction(CHANGE_FILTER, (filter) => ({ type: CHANGE_FILTER, payload: filter }));
//# sourceMappingURL=actions.js.map