import { combineReducers } from 'redux';
import { getType } from 'typesafe-actions';
import { countersActions } from './';
export const countersReducer = combineReducers({
    reduxCounter: (state = 0, action) => {
        switch (action.type) {
            case getType(countersActions.increment):
                return state + 1;
            case getType(countersActions.add):
                return state + action.payload;
            default:
                return state;
        }
    },
});
//# sourceMappingURL=reducer.js.map