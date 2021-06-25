import { UserdataService } from '../../login-singup/userdata.service';
import { Component,Inject, OnInit } from '@angular/core';
import {usersingupdata} from '../../login-singup/usersingupdata';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dataSaved = false;
  cityForm :any;
  studentIdUpdate = 1;
  updateid:number;
  updateusertype : string;
  updateusername : string;
  updateusertel : string;
  updateuseremail :string;
  updateuserpass : string;
  usersingupdatas : usersingupdata[] = [];
  constructor(private formbuilder: FormBuilder, private http: UserdataService,@Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    this.http.getAllUsers().subscribe(data=>{console.log(data);
    this.usersingupdatas = data; });
    console.log(this.usersingupdatas);
    this.cityForm = this.formbuilder.group({
      usertype : ['',[Validators.required]],
      username : ['',[Validators.required]],
      usertel : ['',[Validators.required]],
      useremail : ['',[Validators.required]],
      userpass : ['',[Validators.required]],
      uusertype : ['',[Validators.required]],
      uusername : ['',[Validators.required]],
      uusertel : ['',[Validators.required]],
      uuseremail : ['',[Validators.required]],
      uuserpass : ['',[Validators.required]]
    });
  }
  
  refreshPage() {
    this._document.defaultView.location.reload();
  }
  addnewdata(value:any){
    console.log("enter");
    console.log(value);
    const citysd = this.cityForm.value;
    var cityno :number = 0;
    this.usersingupdatas.forEach(Element => {console.log(Element.names);
     if(Element.phoneno==citysd.usertel){
      cityno =  1;
     }    
    });  
    
  if(cityno == 0){
      this.http.createUser({userId:0,options:citysd.usertype,phoneno:citysd.usertel,emails:citysd.useremail,names:citysd.username,lpassword:citysd.userpass}).subscribe();
      this.cityForm.reset();
      this.refreshPage();
    }
  }
  closemodel(){
    var element = document.getElementById('AddModal');
    element.classList.add('removeclass');
    this.refreshPage(); 
  }

  deleterow(index){
    this.http.deleteStudentById(index).subscribe((res)=>{
      let checks:usersingupdata[] =  this.usersingupdatas.filter(s=>s.userId == index);
      this.refreshPage();
    });
    }

  updaterow(index){
   this.updateid = index;
   let checks:usersingupdata[] =  this.usersingupdatas.filter(s=>s.userId == index);
   this.updateusername= checks[0].names;
   this.updateuseremail= checks[0].emails;
   this.updateusertel= checks[0].phoneno;
   this.updateusertype= checks[0].options;
   this.updateuserpass= checks[0].lpassword;
 
   var element = document.getElementById('AddModal');
   element.classList.add('displayclass'); 
  }

  updatedata(value : any){
    console.log("update"); 
    const ucitysd = this.cityForm.value;
    if(ucitysd.uusername != " " && ucitysd.uuserpass==" " && ucitysd.uusertel== " "){
      this.http.updateStudent(this.updateid,{userId:this.updateid,options:ucitysd.uusertype,phoneno:ucitysd.uusertel,emails:ucitysd.uuseremail,names:ucitysd.uusername,lpassword:ucitysd.uuserpass}).subscribe();     
    }
  }
}
