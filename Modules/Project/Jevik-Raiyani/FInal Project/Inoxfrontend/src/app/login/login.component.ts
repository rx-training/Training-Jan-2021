import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;
    flag: boolean = false
    Gmail: string;
    UserRole: string = ''

    registerForm1: FormGroup;
    submitted1 = false;

    constructor(private formBuilder: FormBuilder,
        private auth: AuthService,
        private router: Router) { }

    ngOnInit() {
        this.auth.GmailVerification(localStorage.getItem('userGmail')).subscribe(data => {
            if (data.status = 'Success') {
                this.flag = true
                this.Gmail = localStorage.getItem('userGmail')
            }
        },
        err=>{
            //console.log('Unathorized')
        })


        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            //  lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            confirmPassword: ['', Validators.required]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });

        this.registerForm1 = this.formBuilder.group({
            firstName: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    get f1() { return this.registerForm1.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
        this.auth.Register({
            Username: this.registerForm.get('firstName').value,
            email: this.registerForm.get('email').value,
            password: this.registerForm.get('password').value,
        },
            this.UserRole
        ).subscribe(data => {
            if (data.Status = 'Success') {
                alert(data.message)
                window.location.reload();
            }
        },
            err => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 500) {
                        alert(err.error.message)
                    }
                }
            }
        );
    }
    logout() {
        localStorage.clear();
        this.flag = false
    }

    onSubmit1() {
        this.submitted1 = true;

        // stop here if form is invalid
        if (this.registerForm1.invalid) {
            return;
        }

        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm1.value))

        this.auth.login({
            Username: this.registerForm1.get('firstName').value,
            Password: this.registerForm1.get('password').value
        }).subscribe(data => {

            if (data.Status = 200) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userGmail', data.userGmail)
                alert('login successfull')
                this.router.navigate(['home'])
            }
        },
            err => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        alert('Enter valid Detail')
                    }
                }
            })
    }
    onSelect(val) {
        this.UserRole = val
        //console.log(this.UserRole)
    }
}


function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
