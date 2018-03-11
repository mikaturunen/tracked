import * as React from 'react';
export const SFCCounter = (props) => {
    const { label, count, onIncrement } = props;
    const handleIncrement = () => { onIncrement(); };
    return (React.createElement("div", null,
        React.createElement("span", null,
            label,
            ": ",
            count,
            " "),
        React.createElement("button", { type: "button", onClick: handleIncrement }, `Increment`)));
};
//# sourceMappingURL=sfc-counter.js.map