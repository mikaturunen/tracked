import * as React from 'react';
export class MouseProvider extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { x: 0, y: 0 };
        this.handleMouseMove = (event) => {
            this.setState({
                x: event.clientX,
                y: event.clientY,
            });
        };
    }
    render() {
        return (React.createElement("div", { style: { height: '100%' }, onMouseMove: this.handleMouseMove }, this.props.render(this.state)));
    }
}
//# sourceMappingURL=mouse-provider.js.map