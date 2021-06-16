import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminLayoutComponent } from "./admin-layout/admin-layout.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";

const routes:Routes=[
    {path:'',component:AdminLoginComponent},
{path:'home',component:AdminLayoutComponent
},
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AdminRoutingModule{}