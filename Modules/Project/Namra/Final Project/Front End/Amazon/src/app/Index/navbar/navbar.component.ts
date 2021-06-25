import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { LoginService } from 'src/app/Services/login.service';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DOBValidatior } from "../../../assets/Validators";
import { Cart } from 'src/app/Models/Cart';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  UserFormBuilder = new FormGroup({});

  user: User = { userFirstName: '', userMiddleName: '', userLastName: '', userLogIn: '', userPassword: '', userContactNo: '', userEmail: '' };

  constructor(private cartService: CartService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private loginService: LoginService) {
    this.UserFormBuilder = this.fb.group({
      Name: this.fb.group({
        FirstName: ['', Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z]*$")])],
        MiddleName: ['', Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z]*$")])],
        LastName: ['', Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z]*$")])]
      }),
      Login: ['', Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z]*$")])],
      PassWord: ['', Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z1-9]*$")])],
      ContactNo: ['', Validators.compose([Validators.required, Validators.minLength(13), Validators.maxLength(13), Validators.pattern("^[+][1-9]*$")])],
      Email: ['', Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z1-9]*@[a-z]+[.][a-z]+$")])],
      BirthDate: ['', Validators.compose([Validators.required, DOBValidatior(5, 100).bind(this)])]
    })
  }

  submit() {
    console.log(this.user);
  }
  get FirstName() {
    return this.UserFormBuilder.get('Name.FirstName') as FormControl;
  }
  get MiddleName() {
    return this.UserFormBuilder.get('Name.MiddleName') as FormControl;
  }
  get LastName() {
    return this.UserFormBuilder.get('Name.LastName') as FormControl;
  }
  get Login() {
    return this.UserFormBuilder.get('Login') as FormControl;
  }
  get Password() {
    return this.UserFormBuilder.get('PassWord') as FormControl;
  }
  get ContactNo() {
    return this.UserFormBuilder.get('ContactNo') as FormControl;
  }
  get Email() {
    return this.UserFormBuilder.get('Email') as FormControl;
  }
  get BirthDate() {
    return this.UserFormBuilder.get('BirthDate') as FormControl;
  }

  @Input() navbar: boolean = true;
  ngOnInit(): void {
    this.checkUrl();
  }
  NavbarFlag = true;
  UserName = '';
  UId =0;
  searchName = '';
  User: User = {userId : 0, userFirstName: '', userMiddleName: '', userLastName: '', userContactNo: '', userEmail: '', userLogIn: '' }
  checkUrl() {
    setTimeout(() => {
      if (window.location.href == "http://localhost:4200/Login") {
        this.NavbarFlag = false;
      }
      else {
        this.NavbarFlag = true;
      }
     
      if (localStorage.getItem("UserName") == '') {
        this.UserName = 'SignIn';
        this.CartLength = 0;
      }
      else {
        this.loginService.GetUserDataByLogin(localStorage.getItem("UserName") as string).subscribe(data => {
          this.User = data;
          this.UserName = this.User.userFirstName;
          this.UId = this.User.userId as number;
        });
        this.cartService.GetCartByUser(this.UId).subscribe(data=>{
          this.carts = data;
          this.CartLength = this.carts.length;
        });
      }
      
      this.checkUrl();
    }, 500);
  }
  carts: Cart[] = [];
  CartLength: number = 0;
  signIn() {
    if (localStorage.getItem("UserName") == '') {
      this.router.navigate(['../Login'], { relativeTo: this.route });
    }
    else {
      this.router.navigate(['../User'], { relativeTo: this.route });
    }
  }
  Home() {
    this.router.navigate(['../Home'], { relativeTo: this.route });
  }
  Cart() {
    if (localStorage.getItem("UserName") == '') {
      this.router.navigate(['../Login'], { relativeTo: this.route });
    }
    else {
      this.router.navigate(['../Cart'], { relativeTo: this.route });
    }
  }
  Order(){
    if (localStorage.getItem("UserName") == '') {
      this.router.navigate(['../Login'], { relativeTo: this.route });
    }
    else {
      this.router.navigate(['../Orders'], { relativeTo: this.route });
    }
  }
  search()
  {
    if(this.searchName == '')
    {
      this.router.navigate(['../Search','All'],{relativeTo : this.route});
      this.searchName='';
    }
    else
    {
      this.router.navigate(['../Search',this.searchName],{relativeTo : this.route});
      this.searchName='';  
    }
  }
  Location()
  {
   
  }
}
