import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { CreateUserComponent } from "./create-user/create-user.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ListUsersComponent } from "./list-users/list-users.component";
import { EditUserComponent } from "./edit-user/edit-user.component";

@NgModule({
    declarations: [CreateUserComponent, ListUsersComponent, EditUserComponent],
    imports: [CommonModule, UserRoutingModule, SharedModule]
})
export class UserModule {}
