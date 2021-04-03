import { Injectable } from "@angular/core";
import { User } from "src/app/shared/models";

@Injectable({
    providedIn: "root"
})
export class UserService {
    userData: User[];

    constructor() {
        this.userData = [];
        this.add(
            new User(
                User.idCounter++,
                "John",
                "Doe",
                "john.doe@example.org",
                "jdoe",
                "12345 Eight Mile Road",
                "56789",
                "Springfield"
            )
        );
    }

    // in a real HTTP service we'd of course return Observable<User[]>
    list(): User[] {
        return this.userData;
    }

    get(id: number): User | undefined {
        for (const user of this.userData) {
            if (id === user.id) {
                return user;
            }
        }

        return undefined;
    }

    add(user: User) {
        this.userData.push(user);
    }

    update(user: User) {
        // nothing to do here, as we've actually been manipulating the user in the list
    }
}
