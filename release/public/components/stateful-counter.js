import * as React from 'react';
export class StatefulCounter extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            count: 0,
        };
        this.handleIncrement = () => {
            this.setState({ count: this.state.count + 1 });
        };
    }
    render() {
        const { handleIncrement } = this;
        const { label } = this.props;
        const { count } = this.state;
        return (React.createElement("div", null,
            React.createElement("span", null,
                label,
                ": ",
                count,
                " "),
            React.createElement("button", { type: "button", onClick: handleIncrement }, `Increment`)));
    }
}
//# sourceMappingURL=stateful-counter.js.map