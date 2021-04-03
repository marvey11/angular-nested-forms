export class User {
    static idCounter = 1;
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public handle: string,
        public street: string,
        public zipCode: string,
        public city: string
    ) {}
}
