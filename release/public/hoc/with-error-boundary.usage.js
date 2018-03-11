import * as React from 'react';
import { withErrorBoundary } from '@src/hoc';
import { ErrorMessage } from '@src/components';
const ErrorMessageWithErrorBoundary = withErrorBoundary(ErrorMessage);
const ErrorThrower = () => (React.createElement("button", { type: "button", onClick: () => { throw new Error(`Catch this!`); } }, `Throw nasty error`));
export default (() => (React.createElement(ErrorMessageWithErrorBoundary, null,
    React.createElement(ErrorThrower, null))));
//# sourceMappingURL=with-error-boundary.usage.js.map