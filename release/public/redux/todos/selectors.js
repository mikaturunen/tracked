import { createSelector } from 'reselect';
export const getTodos = (state) => state.todos.todos;
export const getTodosFilter = (state) => state.todos.todosFilter;
export const getFilteredTodos = createSelector(getTodos, getTodosFilter, (todos, todosFilter) => {
    switch (todosFilter) {
        case 'completed':
            return todos.filter((t) => t.completed);
        case 'active':
            return todos.filter((t) => !t.completed);
        default:
            return todos;
    }
});
//# sourceMappingURL=selectors.js.map