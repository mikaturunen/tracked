import * as React from 'react';
import { SFCCounter } from '@src/components';
export default class extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { count: 0 };
    }
    render() {
        return (React.createElement(SFCCounter, { label: 'SFCCounter', count: this.state.count, onIncrement: () => { this.setState({ count: this.state.count + 1 }); } }));
    }
}
//# sourceMappingURL=sfc-counter.usage.js.map