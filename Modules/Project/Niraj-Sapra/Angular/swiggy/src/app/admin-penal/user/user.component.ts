import { UserdataService } from '../../login-singup/userdata.service';
import { Component,Inject, OnInit } from '@angular/core';
import {usersingupdata} from '../../login-singup/usersingupdata';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dataSaved = false;
  cityForm :any;
  closeResult:string;
  studentIdUpdate = 1;
  updateid:number;
  updateusertype : string;
  updateusername : string;
  updateusertel : string;
  updateuseremail :string;
  updateuserpass : string;
  usersingupdatas : usersingupdata[] = [];
  constructor(private formbuilder: FormBuilder,private modalService: NgbModal, private http: UserdataService,@Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    this.http.getAllUsers().subscribe(data=>{console.log(data);
    this.usersingupdatas = data; });
    console.log(this.usersingupdatas);
    this.cityForm = this.formbuilder.group({
      usertype : ['',[Validators.required]],
      username : ['',Validators.compose([Validators.required,,Validators.pattern('^[a-z A-Z]+$')])],
      usertel : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]+$')])],
      useremail :['',Validators.compose([Validators.required,Validators.email])],
      userpass : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9a-zA-Z]+$')])],
      uusertype : ['',[Validators.required]],
      uusername :['',Validators.compose([Validators.required,,Validators.pattern('^[a-z A-Z]+$')])],
      uusertel : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]+$')])],
      uuseremail : ['',Validators.compose([Validators.required,Validators.email])],
      uuserpass : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9a-zA-Z]+$')])]
    });
  }
//   this.SignUpForm = this.formBuilder.group({
//     emailId : ['',Validators.compose([Validators.required,Validators.email])],
//     name :  ['',Validators.compose([Validators.required,,Validators.pattern('^[a-z A-Z]+$')])],
//     password : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9a-zA-Z]+$')])],
//     mobile : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]+$')])],
//     country : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
//     referralCode : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9][0-9][0-9][0-9]+$')])],
//     gender : ['',Validators.compose([Validators.required])]
//   })
// }
  refreshPage() {
    this._document.defaultView.location.reload();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {console.log("working");
    console.log(result);
      
    this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
//add new user
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
    if(citysd.usertype != null ||citysd.useremail != null || citysd.username != null ||citysd.useremail!= null || citysd.usertel!=null || citysd.userpass != null ){
      this.http.createUser({userId:0,options:citysd.usertype,phoneno:citysd.usertel,emails:citysd.useremail,names:citysd.username,lpassword:citysd.userpass}).subscribe();
    }

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
