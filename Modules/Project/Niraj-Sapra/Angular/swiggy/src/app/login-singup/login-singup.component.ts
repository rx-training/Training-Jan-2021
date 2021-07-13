import { Component, Inject, OnInit } from '@angular/core';
import {usersingupdata} from './usersingupdata';
import { UserdataService } from './userdata.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {DOCUMENT } from '@angular/common';
import {Location} from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-login-singup',
  templateUrl: './login-singup.component.html',
  styleUrls: ['./login-singup.component.css']
})
export class LoginSingupComponent implements OnInit {
  phoneno:number;
  emails:string;
  lpassword:string;
  options:string = "user";
  names:string;
  dataSaved = false;
  loginForm: any;
  signupForm: any;
  allUser: any;
  Customerids:number;
  studentIdUpdate = 1;
  closeResult: string;
  usersingupdata : usersingupdata[] = [];
  constructor(private formbuilder: FormBuilder,@Inject(DOCUMENT) private _document: Document,private modalService: NgbModal,private _location: Location, private http: UserdataService, private router : Router,@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      options : ['',[Validators.required]],
      phoneno : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]+$')])],
      lpassword : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9a-zA-Z]+$')])]
    });
    this.signupForm = this.formbuilder.group({
      options : ['',[Validators.required]],
      phoneno : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]+$')])],
      names : ['',Validators.compose([Validators.required,,Validators.pattern('^[a-z A-Z]+$')])],
      emails : ['',Validators.compose([Validators.required,Validators.email])],
      lpassword : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9a-zA-Z]+$')])]
    });

    //UserDATA
    this.http.getAllUsers().subscribe(data=>{ console.log(data);
        this.allUser = data; 
      });
      
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {console.log("working");     
    this.closeResult = `Closed with: ${result}`;
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
  backClicked() {
    this._location.back();
  }

  //login Data
   login(value : any){
     const loginuser = this.loginForm.value;
     var values = 1;
     this.allUser.forEach(Element => {
      if(Element.phoneno == loginuser.phoneno && Element.lpassword == loginuser.lpassword && Element.options == loginuser.options){
      values = 0;
      let checks:usersingupdata[]   = this.allUser.filter(s=>s.phoneno == loginuser.phoneno);
           this.Customerids = checks[0].userId;
      localStorage.setItem('login',"true");
      localStorage.setItem('Customerid', this.Customerids.toString());
      localStorage.setItem('Customerphoneno', checks[0].phoneno.toString());
      localStorage.setItem('Customername', checks[0].names.toString());
      this.router.navigate([loginuser.options]);
      }   
     });
    }
    refreshPage() {
      this._document.defaultView.location.reload();
    }
  //Signup Data  
  signup(value : any){
    const signupuser = this.signupForm.value;
    this.http.createUser({userId:0,options:signupuser.options.toString(),phoneno:signupuser.phoneno.toString(),emails:signupuser.emails.toString(),names:signupuser.names.toString(),lpassword:signupuser.lpassword.toString()}).subscribe();
    alert(signupuser.names+" Signup Successfully");
    this.signupForm.reset();
    this.refreshPage();
   }   
}