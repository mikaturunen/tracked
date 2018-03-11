import * as tslib_1 from "tslib";
import * as React from 'react';
const MISSING_ERROR = 'Error was swallowed during propagation.';
export const withErrorBoundary = (WrappedComponent) => {
    return _a = class WithErrorBoundary extends React.Component {
            constructor() {
                super(...arguments);
                this.state = {
                    error: undefined,
                };
                this.logErrorToCloud = (error, info) => {
                };
                this.handleReset = () => {
                    this.setState({ error: undefined });
                };
            }
            componentDidCatch(error, info) {
                this.setState({ error: error || new Error(MISSING_ERROR) });
                this.logErrorToCloud(error, info);
            }
            render() {
                const _a = this.props, { children } = _a, remainingProps = tslib_1.__rest(_a, ["children"]);
                const { error } = this.state;
                if (error) {
                    return (React.createElement(WrappedComponent, Object.assign({}, remainingProps, { onReset: this.handleReset })));
                }
                return children;
            }
        },
        _a.displayName = `withErrorBoundary(${WrappedComponent.name})`,
        _a;
    var _a;
};
//# sourceMappingURL=with-error-boundary.js.map