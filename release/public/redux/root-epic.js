import { combineEpics } from 'redux-observable';
import { epics as toasts } from './toasts/epics';
export const rootEpic = combineEpics(toasts);
//# sourceMappingURL=root-epic.js.map