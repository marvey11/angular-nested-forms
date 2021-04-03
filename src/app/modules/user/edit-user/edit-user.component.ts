import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/core/http";
import { User } from "src/app/shared/models";

@Component({
    selector: "app-edit-user",
    templateUrl: "./edit-user.component.html",
    styleUrls: ["./edit-user.component.css"]
})
export class EditUserComponent implements OnInit {
    user!: User;

    constructor(private service: UserService, private route: ActivatedRoute) {}

    getUser(id: number | string | null): void {
        if (id) {
            const result = this.service.get(Number(id));
            if (result) {
                this.user = result;
            }
        }
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get("id");
        this.getUser(id);
    }
}
