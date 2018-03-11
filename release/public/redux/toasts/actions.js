import { createAction } from 'typesafe-actions';
export const toastsActions = {
    addToast: createAction('ADD_TOAST', (toast) => ({
        type: 'ADD_TOAST',
        payload: toast,
    })),
    removeToast: createAction('REMOVE_TOAST', (id) => ({
        type: 'REMOVE_TOAST',
        payload: id,
    })),
};
//# sourceMappingURL=actions.js.map