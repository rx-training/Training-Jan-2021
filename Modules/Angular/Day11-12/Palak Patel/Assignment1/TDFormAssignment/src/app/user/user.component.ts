import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Profile, Technology, User } from '../models/classes';
import { UserService } from '../models/user-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  isValidFormSubmitted = false;
	allProfiles: Profile[];
	allTechnologies: Technology[];
	initialProfileVal = null;

	constructor(private userService: UserService) { }

	ngOnInit(): void {
		this.allProfiles = this.userService.getPofiles();
		this.allTechnologies = this.userService.getTechnologies();
	}

	onFormSubmit(form: NgForm) {
		this.isValidFormSubmitted = false;
		if (form.valid) {
			this.isValidFormSubmitted = true;
		} else {
			return;
		}
		let newUser: User = form.value;
		this.userService.createUser(newUser);
		this.resetUserForm(form);
	}

	resetUserForm(form: NgForm) {
		form.resetForm();
		this.initialProfileVal = null;
	}

	setDefaultValues(form: NgForm) {
		let user = new User();
		user.userName = "John Doe";
		user.age = 20;
		user.gender = 'Male';
		user.isMarried = false;
		user.profile = this.allProfiles[2];
		user.technologies = [
			this.allTechnologies[1],
			this.allTechnologies[3]
		];
		user.isTCAccepted = false;
		form.setValue(user);
	}

	compareTech(t1: Technology, t2: Technology): boolean {
		//console.log(t1.techId +'-' + t2.techId);
		return t1 && t2 ? t1.techId === t2.techId : t1 === t2;
	}}
