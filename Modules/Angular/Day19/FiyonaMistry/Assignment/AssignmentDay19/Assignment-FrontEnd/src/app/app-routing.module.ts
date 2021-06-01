import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  { path : "add", component : AddStudentComponent },
  { path : "update", component : UpdateStudentComponent },
  { path : "delete", component : DeleteStudentComponent },
  { path : "", redirectTo : "/add", pathMatch : "full" },
  { path : "**", component : PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
