import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminLayoutComponent } from "./admin-layout/admin-layout.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { AdminRoutingModule } from "./admin-routing.module";

@NgModule({
    imports:[CommonModule,
    FormsModule,
    AdminRoutingModule,
    ReactiveFormsModule
],
declarations:[
    AdminLayoutComponent,
    AdminLoginComponent]
 
})
export class AdminModule{}