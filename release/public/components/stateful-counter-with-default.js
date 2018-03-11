import * as React from 'react';
export const StatefulCounterWithDefault = (_a = class extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                count: this.props.initialCount,
            };
            this.handleIncrement = () => {
                this.setState({ count: this.state.count + 1 });
            };
        }
        componentWillReceiveProps({ initialCount }) {
            if (initialCount != null && initialCount !== this.props.initialCount) {
                this.setState({ count: initialCount });
            }
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
    },
    _a.defaultProps = {
        initialCount: 0,
    },
    _a);
var _a;
//# sourceMappingURL=stateful-counter-with-default.js.map