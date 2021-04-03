import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UserModule } from "../modules/user/user.module";

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule, RouterModule, UserModule]
})
export class CoreModule {}
