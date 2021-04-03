import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-user-social",
    templateUrl: "./user-social.component.html",
    styleUrls: ["./user-social.component.css"]
})
export class UserSocialComponent implements OnInit {
    form!: FormGroup;
    userEmail!: FormControl;
    userHandle!: FormControl;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.userEmail = new FormControl("", [Validators.email, Validators.required]);
        this.userHandle = new FormControl("", [Validators.minLength(4), Validators.required]);
        this.form = this.fb.group({
            email: this.userEmail,
            handle: this.userHandle
        });
    }
}
