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
  studentIdUpdate = 1;
  closeResult: string;
  usersingupdata : usersingupdata[] = [];
  constructor(private formbuilder: FormBuilder,private modalService: NgbModal,private _location: Location, private http: UserdataService, private route : Router, private router : Router,@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      // user_id : ['',[Validators.required]],
      options : ['',[Validators.required]],
      phoneno : ['',[Validators.required]],
      // emails : ['',[Validators.required]],
      lpassword : ['',[Validators.required]]
    });
    this.signupForm = this.formbuilder.group({
      options : ['',[Validators.required]],
      phoneno : ['',[Validators.required]],
      names : ['',[Validators.required]],
      emails : ['',[Validators.required]],
      lpassword : ['',[Validators.required]]
    });
    console.log("data");
    
    this.http.getAllUsers().subscribe(data=>{ console.log(data);
        this.allUser = data; });
      
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

  
  backClicked() {
    this._location.back();
  }
  
   login(value : any){
    //this.router.navigate(['admin']);
    //  this._location.back();
     const loginuser = this.loginForm.value;
     var values = 1;
     console.log(loginuser);     
     this.allUser.forEach(Element => {
      console.log('backed route'); 
      console.log(this.allUser);
      if(Element.phoneno == loginuser.phoneno && Element.lpassword == loginuser.lpassword && Element.options == loginuser.options){
      console.log(loginuser.options);
      values = 0;
      this.router.navigate([loginuser.options]);
      }   
     });
    //  if(values==1){
    //   this.document.defaultView.location.reload();
    //  }
    }
  signup(value : any){
    const signupuser = this.signupForm.value;
    var id = this.allUser.length + 1;
    this.http.createUser({userId:id,options:signupuser.options,phoneno:signupuser.phoneno.toString(),emails:signupuser.emails,names:signupuser.names,lpassword:signupuser.lpassword}).subscribe();
    this.signupForm.reset();
  }   
}