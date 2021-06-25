import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSingupComponent } from './login-singup.component';
import { LoginsingupsRoutingModule } from './loginsingups-routing.module';
import { UserdataService } from './userdata.service';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [LoginSingupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginsingupsRoutingModule
  ],
  exports: [
    LoginSingupComponent
  ],
  providers: [HttpClientModule,UserdataService],
})
export class LoginsingupsModule { }
