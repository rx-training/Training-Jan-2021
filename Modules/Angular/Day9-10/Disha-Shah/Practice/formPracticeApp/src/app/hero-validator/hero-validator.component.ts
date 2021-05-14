import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormArray, Validators, AbstractControl, FormControl, FormGroup, ValidatorFn, ValidationErrors} from '@angular/forms';
import { identityRevealedValidator } from '../Validators/identityRevealedValidator';

@Component({
  selector: 'app-hero-validator',
  templateUrl: './hero-validator.component.html',
  styleUrls: ['./hero-validator.component.css']
})
export class HeroValidatorComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};

  heroForm = new FormGroup({
    name: new FormControl(this.hero.name, [
      Validators.required,
      Validators.minLength(4),
      this.forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    ]),
    alterEgo: new FormControl(this.hero.alterEgo),
    power: new FormControl(this.hero.power, Validators.required),
    phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)])
  }, { validators: identityRevealedValidator });

  get name() { return this.heroForm.controls['name']; }

  get phone() { return this.heroForm.controls['phone']; }

  get power() { return this.heroForm.get('power'); }

  /** A hero's name can't match the given regular expression */
  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }

  profileSubmit(){
    console.log(this.heroForm);
  }

  constructor() { }

  ngOnInit(): void {
    
  
  }

}
