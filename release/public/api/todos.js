import { resolveWithDelay } from './utils';
const pageSize = 10;
const todosResponse = require('../fixtures/todos.json');
export const Todos = {
    getAll: (pageNumber = 0) => resolveWithDelay(todosResponse
        .slice(pageNumber * pageSize, (pageNumber * pageSize) + pageSize - 1)),
    get: (id) => resolveWithDelay(todosResponse
        .find(t => t.id === id)),
    create: (payload) => resolveWithDelay(todosResponse
        .push(payload)),
    update: (payload) => resolveWithDelay(todosResponse
        .map(t => t.id === payload.id ? payload : t)),
    delete: (id) => resolveWithDelay(todosResponse
        .filter(t => t.id !== id)),
};
//# sourceMappingURL=todos.js.map