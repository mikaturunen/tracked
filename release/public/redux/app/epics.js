import { combineEpics } from 'redux-observable';
import { saveState } from '@src/services/local-storage-service';
const SAVING_DELAY = 1000;
const saveStateInLocalStorage = (action$, store) => action$
    .debounceTime(SAVING_DELAY)
    .do((action) => {
    saveState(store.getState());
})
    .ignoreElements();
export const epics = combineEpics(saveStateInLocalStorage);
//# sourceMappingURL=epics.js.map