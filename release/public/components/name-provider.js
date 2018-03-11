import * as React from 'react';
export class NameProvider extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            name: 'Piotr',
        };
    }
    render() {
        return this.props.children(this.state);
    }
}
//# sourceMappingURL=name-provider.js.map