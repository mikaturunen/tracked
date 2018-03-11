import * as React from 'react';
import { MouseProvider } from './mouse-provider';
export default () => (React.createElement(MouseProvider, { render: mouse => (React.createElement("p", null,
        "The mouse position is ",
        mouse.x,
        ", ",
        mouse.y)) }));
//# sourceMappingURL=mouse-provider.usage.js.map