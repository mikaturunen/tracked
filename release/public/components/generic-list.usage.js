import * as React from 'react';
import { User } from '@src/models';
import { GenericList } from '@src/components';
const users = [
    new User('Rosamonte', 'Especial'),
    new User('Aguantadora', 'Despalada'),
    new User('Taragui', 'Vitality'),
];
export class UserList extends GenericList {
}
export default () => (React.createElement(UserList, { items: users, itemRenderer: (item) => React.createElement("div", { key: item.id }, item.fullName) }));
//# sourceMappingURL=generic-list.usage.js.map