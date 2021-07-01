import { CustomerList } from './../CustomerList';
import { SignUpService } from './../sign-up.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css']
})
export class AllCustomersComponent implements OnInit {

  dataSaved = false;
  allCustomers : any;
  CustomerIdUpdate : any;
  SignUpForm : any;
  
  constructor(private formBuilder : FormBuilder,private signUpService : SignUpService) {
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

   ngOnInit() {
   
    this.loadAllCustomers();  
  }
  loadAllCustomers() {  
   this.signUpService.getAllCustomers().subscribe(data=>{ this.allCustomers = data;console.log(data)});
   console.log(this.allCustomers);
  }  
  
  onFormSubmit(value : any) {  
    this.dataSaved = false;  
    const customer = this.SignUpForm.value;  
    this.CreateCustomer(customer.emailId , customer );  
    console.log(this.SignUpForm.value);
    this.SignUpForm.reset();  
  }  
  loadCustomerToEdit(emailId : string) {  
    this.signUpService.getCustomerById(emailId).subscribe(customer=> { 
      this.dataSaved = false;  
      this.CustomerIdUpdate = customer.emailId; 
      alert(emailId);
      alert(customer.name);
      alert(customer.password);
      alert(customer.mobile);
      alert(customer.country);
      alert(customer.gender);
      alert(customer.otp);
      alert(customer.referralCode);
      this.SignUpForm.controls['emailId'].setValue(emailId);  
      this.SignUpForm.controls['name'].setValue(customer.name);  
      this.SignUpForm.controls['password'].setValue(customer.password);    
      this.SignUpForm.controls['mobile'].setValue(customer.mobile);  
      this.SignUpForm.controls['country'].setValue(customer.country);  
      //this.SignUpForm.controls['gender'].setValue(customer.gender);  
      this.SignUpForm.controls['otp'].setValue(customer.otp); 
      this.SignUpForm.controls['referralCode'].setValue(customer.referralCode);   
    });  
  }  
  CreateCustomer(emailId :any , customer : CustomerList) {  
      this.signUpService.createCustomer(customer).subscribe(  
        () => {  
          this.dataSaved = true;  
          alert('Record saved Successfully');  
          this.loadAllCustomers();
          this.CustomerIdUpdate = emailId; 
          customer.emailId = emailId;
          this.SignUpForm.reset();  
        }
      );  
        
      }
      updateForm(emailId : string , customer : CustomerList)
      {    
        this.signUpService.updateCustomer(emailId,customer).subscribe(() => {  
        console.log(customer,emailId);
        this.dataSaved = true;  
        alert('Record Updated Successfully');  
        this.loadAllCustomers(); 
        this.CustomerIdUpdate = emailId;  
        this.SignUpForm.reset();  
        }
        );
      }

  deleteCustomer(emailId : string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.signUpService.deleteCustomerById(emailId).subscribe(() => {  
      this.dataSaved = true;  
      alert('Record Deleted Succefully');  
      this.loadAllCustomers();  
      this.CustomerIdUpdate = 0;  
      this.SignUpForm.reset();  
    });  
  }  
}  
  resetForm() {  
    this.SignUpForm.reset();  
    this.dataSaved = false;  
  }

}
