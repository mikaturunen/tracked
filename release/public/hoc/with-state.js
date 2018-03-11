import * as tslib_1 from "tslib";
import * as React from 'react';
export const withState = (WrappedComponent) => {
    return _a = class WithState extends React.Component {
            constructor() {
                super(...arguments);
                this.state = {
                    count: Number(this.props.initialCount) || 0,
                };
                this.handleIncrement = () => {
                    this.setState({ count: this.state.count + 1 });
                };
            }
            render() {
                const remainingProps = tslib_1.__rest(this.props, []);
                const { count } = this.state;
                return (React.createElement(WrappedComponent, Object.assign({}, remainingProps, { count: count, onIncrement: this.handleIncrement })));
            }
        },
        _a.displayName = `withState(${WrappedComponent.name})`,
        _a;
    var _a;
};
//# sourceMappingURL=with-state.js.map