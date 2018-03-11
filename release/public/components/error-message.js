import * as React from 'react';
export const ErrorMessage = ({ onReset }) => {
    return (React.createElement("div", null,
        React.createElement("h2", null, `Sorry there was an unexpected error`),
        `To continue: `,
        React.createElement("a", { onClick: () => { onReset(); } }, `go to home page`)));
};
//# sourceMappingURL=error-message.js.map