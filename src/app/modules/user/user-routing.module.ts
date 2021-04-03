import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateUserComponent } from "./create-user/create-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { ListUsersComponent } from "./list-users/list-users.component";

const routes: Routes = [
    { path: "users", component: ListUsersComponent },
    { path: "user/create", component: CreateUserComponent },
    { path: "user/:id/edit", component: EditUserComponent },
    { path: "**", redirectTo: "/users" }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
