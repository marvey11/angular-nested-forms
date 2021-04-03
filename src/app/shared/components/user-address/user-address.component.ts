import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-user-address",
    templateUrl: "./user-address.component.html",
    styleUrls: ["./user-address.component.css"]
})
export class UserAddressComponent implements OnInit {
    form!: FormGroup;

    userStreet!: FormControl;
    userZip!: FormControl;
    userCity!: FormControl;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.userStreet = new FormControl("", [Validators.required]);
        this.userZip = new FormControl("", [Validators.required]);
        this.userCity = new FormControl("", [Validators.required]);

        this.form = this.fb.group({
            street: this.userStreet,
            zip: this.userZip,
            city: this.userCity
        });
    }
}
