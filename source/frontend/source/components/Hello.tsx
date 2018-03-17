import * as React from 'react';

export interface HelloProps {
    compiler: string;
    framework: string;
    value: number;
}

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello, World! from React Hello.tsx. this {this.props.value}</h1>
    }
}
