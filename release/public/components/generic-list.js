import * as React from 'react';
export class GenericList extends React.Component {
    render() {
        const { items, itemRenderer } = this.props;
        return (React.createElement("div", null, items.map(itemRenderer)));
    }
}
//# sourceMappingURL=generic-list.js.map