import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/core/http";
import { User } from "../../models";

@Component({
    selector: "app-user-details",
    templateUrl: "./user-details.component.html",
    styleUrls: ["./user-details.component.css"]
})
export class UserDetailsComponent implements OnInit {
    @Input() heading!: string;
    @Input() user?: User;

    userDetailsForm!: FormGroup;

    userName!: FormControl;
    userSocial!: FormControl;
    userAddress!: FormControl;
    showFormDataToggle!: FormControl;

    constructor(private service: UserService, private router: Router, private fb: FormBuilder) {}

    onSubmit() {
        if (this.user) {
            // edit mode
            this.user.firstName = this.userName.value.firstName;
            this.user.lastName = this.userName.value.lastName;
            this.user.email = this.userSocial.value.email;
            this.user.handle = this.userSocial.value.handle;
            this.user.street = this.userAddress.value.street;
            this.user.zipCode = this.userAddress.value.zipCode;
            this.user.city = this.userAddress.value.city;
            this.service.update(this.user);
        } else {
            // create mode
            const newUser = new User(
                User.idCounter++,
                this.userName.value.firstName,
                this.userName.value.lastName,
                this.userSocial.value.email,
                this.userSocial.value.handle,
                this.userAddress.value.street,
                this.userAddress.value.zipCode,
                this.userAddress.value.city
            );
            this.service.add(newUser);
        }

        this.router.navigateByUrl("/users");
    }

    ngOnInit(): void {
        if (this.user) {
            this.userName = new FormControl({ firstName: this.user.firstName, lastName: this.user.lastName });
            this.userSocial = new FormControl({ email: this.user.email, handle: this.user.handle });
            this.userAddress = new FormControl({
                street: this.user.street,
                zipCode: this.user.zipCode,
                city: this.user.city
            });
        } else {
            this.userName = new FormControl({ firstName: "", lastName: "" });
            this.userSocial = new FormControl({ email: "", handle: "" });
            this.userAddress = new FormControl({ street: "", zipCode: "", city: "" });
        }

        this.showFormDataToggle = new FormControl(false);

        this.userDetailsForm = this.fb.group({
            nameData: this.userName,
            socialData: this.userSocial,
            addressData: this.userAddress
        });
    }
}
