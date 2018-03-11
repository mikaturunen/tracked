import cuid from 'cuid';
export class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = cuid();
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    static create(dto) {
        const model = new User(dto.first_name, dto.last_name);
        model.id = dto.id;
        return model;
    }
    serialize() {
        return {
            id: this.id,
            first_name: this.firstName,
            last_name: this.lastName,
        };
    }
}
//# sourceMappingURL=user.js.map