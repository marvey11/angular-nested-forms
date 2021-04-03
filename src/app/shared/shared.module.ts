import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { UserAddressComponent } from "./components/user-address/user-address.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { UserNameComponent } from "./components/user-name/user-name.component";
import { UserSocialComponent } from "./components/user-social/user-social.component";

@NgModule({
    declarations: [UserAddressComponent, UserDetailsComponent, UserNameComponent, UserSocialComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [UserAddressComponent, UserDetailsComponent, UserNameComponent, UserSocialComponent]
})
export class SharedModule {}
