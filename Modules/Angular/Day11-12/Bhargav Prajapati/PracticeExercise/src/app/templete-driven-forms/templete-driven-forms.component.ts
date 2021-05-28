import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templete-driven-forms',
  templateUrl: './templete-driven-forms.component.html',
  styleUrls: ['./templete-driven-forms.component.css']
})
export class TempleteDrivenFormsComponent implements OnInit {

  constructor() { }
  DefaultQuestion="Teacher"
  Answer='';
  gender=['Male','Female'];
  storeData={
    UserName:'',
    Email:'',
    SecarateQuesion:'',
    Message:'',
    Gender:''

  }
  submited=false;

  ngOnInit(): void {
  }
  @ViewChild('f') Singupform:NgForm

  OnSubmit()
  {
    console.log(this.Singupform);
    console.log("submitted")
    this.submited=true;
    this.storeData.UserName=this.Singupform.value.UserData.UserName
    this.storeData.Email=this.Singupform.value.UserData.Email
    this.storeData.Gender=this.Singupform.value.gender
    this.storeData.Message=this.Singupform.value.Message
    this.storeData.SecarateQuesion=this.Singupform.value.Secret 
    this.Singupform.reset()
    
  }
  SuggestedUsrname()
  {
    const UName="Bill";
    // this.Singupform.setValue({
    //   UserData:
    //   {
    //     UserName:UName,
    //     Email:''
    //   },
    //   Secret:'Pet',
    //   Message:'',
    //   gender:'Male'
      

      
    // })
    this.Singupform.form.patchValue({
      UserData:
      {
        UserName:UName
      }
    })

  }
  RegisterData=
  {
    FullName:
    {
      FirstName:'',
      LastName:''
    },
    Email:'',
    PhoneNo:'',
    Password:''
  }
  Registervalue=false;
  @ViewChild('d') RegisterForm :NgForm
  Register()
  {
    this.Registervalue=true;
      this.RegisterData.FullName.FirstName=this.RegisterForm.value.RegisterName.FirstName  
      this.RegisterData.FullName.LastName=this.RegisterForm.value.RegisterName.LastName
      this.RegisterData.Email=this.RegisterForm.value.Email
      this.RegisterData.PhoneNo=this.RegisterForm.value.PhoneNumber
      this.RegisterData.Password=this.RegisterForm.value.Password
      this.RegisterForm.reset();
  }

}
