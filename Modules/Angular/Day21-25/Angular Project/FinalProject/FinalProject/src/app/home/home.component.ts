import { AdminServiceService } from './../admin-service.service';
import { CustomerList } from './../CustomerList';
import { SignUpService } from './../sign-up.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {FormGroup,FormControl,FormArray,AbstractControl, FormBuilder, Validators, EmailValidator} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  dataSaved = false;
  allCustomers: any;
  allAdmins: any;
  customerIdUpdate = 0;
  LoginForm:FormGroup;
  AdminLoginForm : FormGroup;
  SignUpForm : FormGroup;
  succsess = 0 ;

  constructor(private formBuilder : FormBuilder,private router: Router,private signupService : SignUpService,private adminService : AdminServiceService) { 
    
    this.LoginForm = this.formBuilder.group({
      emailId : ['',Validators.compose([Validators.required,Validators.email])],
      password : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9a-zA-Z]+$')])],
    });

    this.AdminLoginForm = this.formBuilder.group({
      emailId : ['',Validators.compose([Validators.required,Validators.email])],
      password : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9a-zA-Z]+$')])],
    });

    this.SignUpForm = this.formBuilder.group({
      emailId : ['',Validators.compose([Validators.required,Validators.email])],
      name :  ['',Validators.compose([Validators.required,,Validators.pattern('^[a-zA-Z]+$')])],
      password : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9a-zA-Z]+$')])],
      mobile : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9]+$')])],
      country : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
      otp :  ['',Validators.compose([Validators.required,Validators.pattern('^[0-9]+$')])],
      referralCode : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9]+$')])]
    })
   
  }

  ngOnInit(): void {
    this.loadAllCustomers();
    this.loadAllAdmins();
  }
  loadAllCustomers() {  
    this.signupService.getAllCustomers().subscribe(data=>{ this.allCustomers = data;console.log(data)});
   }  

   loadAllAdmins() {  
    this.adminService.getAllAdmins().subscribe(data=>{ this.allAdmins = data;console.log(data)});
   }  
   
   onFormSubmit(value : any) {  
    this.dataSaved = false;  
    const customer = this.SignUpForm.value;  
    this.CreateCustomer(customer.emailId,customer);  
    console.log(this.SignUpForm.value);
    this.SignUpForm.reset();  
  }  

  CreateCustomer(emailId :any,customer: CustomerList) {  
      this.signupService.createCustomer(customer).subscribe(  
        (data) => {  
          this.dataSaved = true;  
          alert('Registered Successfully');  
          this.loadAllCustomers();
          this.customerIdUpdate = emailId; 
          customer.emailId = emailId;
          this.SignUpForm.reset();  
        }
      );  
      }
      resetForm() {  
        this.SignUpForm.reset();  
        this.dataSaved = false;  
      }  
      onFormSubmitLogin(emailId : string,password: string) {  
        console.log(emailId);
        console.log(password);
        this.signupService.getAllCustomers().subscribe(
          (data) =>{
            console.log(this.allCustomers);
            for(let obj of this.allCustomers)
            {
              if(obj.emailId == emailId && obj.password == password)
              {
                alert("You have successfully logged in");
                console.log(obj.emailId);
                console.log(obj.password);
                localStorage.setItem('emailId',emailId);
                this.router.navigate(['/customer']);
                this.succsess =1;
              }

            }
            if(this.succsess == 0)
            {
              alert("Wrong Email Id or Password Please enter correct information");
            }
          }
        );
      }  

      onFormSubmitLoginAdmin(emailId : string,password: string) {  
        console.log(emailId);
        console.log(password);
        this.adminService.getAllAdmins().subscribe(
          data =>{
            console.log(this.allAdmins);
            for(let obj of this.allAdmins)
            {
              if(obj.emailId == emailId && obj.password == password)
              {
                alert("You have successfully logged in");
        
                this.router.navigate(['/admin']);
                this.succsess =1;
              }
            }
            if(this.succsess == 0)
            {
              alert("Wrong Email Id or Password Please enter correct information");
            }
          }
        );
      }  
          resetFormLogin() {  
            this.LoginForm.reset();  
            this.dataSaved = false;  
          }  
}
