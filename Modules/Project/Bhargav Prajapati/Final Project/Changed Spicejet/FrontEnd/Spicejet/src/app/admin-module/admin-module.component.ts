import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-module',
  templateUrl: './admin-module.component.html',
  styleUrls: ['./admin-module.component.css']
})
export class AdminModuleComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router) { }

  AdminLogIn:FormGroup;
  admincode:AbstractControl;
  adminemail:AbstractControl;
  adminpassword:AbstractControl;

  flag:boolean=false;
  ngOnInit(): void {
    this.AdminLogIn=this.fb.group(
      {
          AdminCode:['',[Validators.required]],
          AdminEmail:['',[Validators.required,Validators.email]],
          AdminPassword:['',[Validators.required]]
      });

      // this.admincode=this.AdminLogIn.get('AdminCode');
      // this.adminemail=this.AdminLogIn.get('AdminEmail');
      // this.adminpassword=this.AdminLogIn.get('AdminPassword');

      // this.service.GetAllAdmin().subscribe(
      //     (res:Array<AdminDetails>)=>{
      //       this.AdminDetails=res;
      //     }
      // );

  }
  
  storeAdminData()
  {
    // let checkavailibility=0;
    // for (const iterator of this.AdminDetails) {
    
    //   if(this.AdminLogIn.value.AdminCode==iterator.adminCode && this.AdminLogIn.value.AdminEmail==iterator.adminEmail && this.AdminLogIn.value.AdminPassword==iterator.adminPassword)
    //       {
    //           this.router.navigate(['Admin-Panel']);
    //           checkavailibility=1;
            

    //       }

      
    // }
    // if(checkavailibility==0)
    // {
    //   this.flag=true;
    // }
    
    // this.AdminLogIn.reset();
    
  }
  fun()
    {
     this.flag=false; 
    }

    Backtohome()
    {
      //this.flag=true;
      this.router.navigate(['']);
      
    }

 

}


