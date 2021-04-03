import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { CreateUserComponent } from "./create-user/create-user.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [CreateUserComponent],
    imports: [CommonModule, UserRoutingModule, SharedModule]
})
export class UserModule {}
