import { createAction } from 'typesafe-actions';
export const countersActions = {
    increment: createAction('INCREMENT'),
    add: createAction('ADD', (amount) => ({
        type: 'ADD',
        payload: amount,
    })),
};
//# sourceMappingURL=actions.js.map