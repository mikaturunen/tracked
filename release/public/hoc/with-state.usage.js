import * as React from 'react';
import { withState } from '@src/hoc';
import { SFCCounter } from '@src/components';
const SFCCounterWithState = withState(SFCCounter);
export default (() => (React.createElement(SFCCounterWithState, { label: 'SFCCounterWithState' })));
//# sourceMappingURL=with-state.usage.js.map