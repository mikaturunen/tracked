import * as React from 'react';
import SFCCounter from '@src/components/sfc-counter.usage';
import SFCSpreadAttributes from '@src/components/sfc-spread-attributes.usage';
import StatefulCounter from '@src/components/stateful-counter.usage';
import StatefulCounterWithInitialCount from '@src/components/stateful-counter-with-default.usage';
import UserListUsage from '@src/components/generic-list.usage';
export const Home = () => {
    return (React.createElement("section", null,
        React.createElement(SFCCounter, null),
        React.createElement(SFCSpreadAttributes, null),
        React.createElement(StatefulCounter, null),
        React.createElement(StatefulCounterWithInitialCount, null),
        React.createElement(UserListUsage, null)));
};
//# sourceMappingURL=home.js.map