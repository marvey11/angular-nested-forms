import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-user-name",
    templateUrl: "./user-name.component.html",
    styleUrls: ["./user-name.component.css"]
})
export class UserNameComponent implements OnInit {
    form!: FormGroup;
    firstName!: FormControl;
    lastName!: FormControl;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.firstName = new FormControl("", [Validators.minLength(3), Validators.required]);
        this.lastName = new FormControl("", [Validators.minLength(3), Validators.required]);
        this.form = this.fb.group({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }
}
