import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/core/http";
import { User } from "src/app/shared/models";

@Component({
    selector: "app-list-users",
    templateUrl: "./list-users.component.html",
    styleUrls: ["./list-users.component.css"]
})
export class ListUsersComponent implements OnInit {
    userData!: User[];

    constructor(private service: UserService) {
        this.userData = [];
    }

    loadUsers(): void {
        this.userData.length = 0;
        for (const user of this.service.list()) {
            this.userData.push(user);
        }
    }

    ngOnInit(): void {
        this.loadUsers();
    }
}
