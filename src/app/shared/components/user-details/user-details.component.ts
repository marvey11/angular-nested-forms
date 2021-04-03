import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "app-user-details",
    templateUrl: "./user-details.component.html",
    styleUrls: ["./user-details.component.css"]
})
export class UserDetailsComponent implements OnInit {
    @Input() heading!: string;

    userDetailsForm!: FormGroup;

    userName!: FormControl;
    userSocial!: FormControl;
    userAddress!: FormControl;
    showFormDataToggle!: FormControl;

    constructor(private fb: FormBuilder) {}

    onSubmit() {}

    ngOnInit(): void {
        this.userName = new FormControl({ firstName: "", lastName: "" });
        this.userSocial = new FormControl({ email: "", handle: "" });
        this.userAddress = new FormControl({ street: "", zipCode: "", city: "" });

        this.showFormDataToggle = new FormControl(false);

        this.userDetailsForm = this.fb.group({
            nameData: this.userName,
            socialData: this.userSocial,
            addressData: this.userAddress
        });
    }
}
