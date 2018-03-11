import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer, rootEpic } from '@src/redux';
const composeEnhancers = (process.env.NODE_ENV === 'development' &&
    window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
function configureStore(initialState) {
    const middlewares = [
        createEpicMiddleware(rootEpic),
    ];
    const enhancer = composeEnhancers(applyMiddleware(...middlewares));
    return createStore(rootReducer, initialState, enhancer);
}
const store = configureStore();
export default store;
//# sourceMappingURL=store.js.map