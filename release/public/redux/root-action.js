import { $call } from 'utility-types';
import { countersActions } from '@src/redux/counters';
import { todosActions } from '@src/redux/todos';
import { toastsActions } from '@src/redux/toasts';
const returnsOfActions = [
    ...Object.values(countersActions),
    ...Object.values(todosActions),
    ...Object.values(toastsActions),
].map($call);
//# sourceMappingURL=root-action.js.map