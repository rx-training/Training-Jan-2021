import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentBase } from './models/student-base';
import { dobValidator } from './Validators/dobValidator';

@Injectable({
  providedIn: 'root'
})
export class StudentControlService {

  constructor() { }

  toFormGroup(students: StudentBase<string>[] ) {
    const group: any = {};
    const nameGroup: any = {};
    const addressGroup: any = {};
    const fatherInfoGroup: any = {};
    const fatherNameGroup: any = {};
    const motherInfoGroup: any = {};
    const motherNameGroup: any = {};

    students.forEach(student => {
      // console.log(student);
      // console.log(student.type);
      // console.log(student.key);
      // console.log(student.controlType);
      // console.log(student.required);
      // console.log('split: ' + student.key.split('.'));
      // console.log('split: ' + student.key.split('.')[0]);
      // console.log('split: ' + student.key.split('.')[1]);
      var keys: string[] = student.key.split('.');
      if(keys[0]=='name'){
        
        // nameGroup[keys[1]] = student.required ?  new FormControl(student.value || '', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')]))
        //                                       : new FormControl(student.value || '',  Validators.pattern('[a-zA-Z ]*'));

        nameGroup[keys[1]] = this.newFormControl(student);
      
        group[keys[0]] = new FormGroup(nameGroup);
      }
      else if(keys[0]=='address'){
        // if(student.type == 'number'){
        //   if(student.label == 'Pincode'){
            // addressGroup[keys[1]] = student.required ?  new FormControl(student.value || '', Validators.compose([Validators.required, Validators.pattern('[0-9]{6}')]))
            //                                     : new FormControl(student.value || '', Validators.pattern('[0-9]{6}'));

              addressGroup[keys[1]] = this.newFormControl(student);
        //   }
          
        // }
        
        // else{
          // addressGroup[keys[1]] = student.required ?  new FormControl(student.value || '', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')]))
          //                                       : new FormControl(student.value || '',  Validators.pattern('[a-zA-Z ]*'));
        //}
        group[keys[0]] = new FormGroup(addressGroup);
      }
      else if(keys[0]=='father'){
        if(keys[1]=='name'){
        
          // fatherNameGroup[keys[2]] = student.required ?  new FormControl(student.value || '', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')]))
          //                                       : new FormControl(student.value || '',  Validators.pattern('[a-zA-Z ]*'));

          fatherNameGroup[keys[2]] = this.newFormControl(student);
        
          fatherInfoGroup[keys[1]] = new FormGroup(fatherNameGroup);                                      
        }
        else{
          // if(student.type == 'number'){
            
          //   fatherInfoGroup[keys[1]] = student.required ?  new FormControl(student.value || '', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')]))
          //                                         : new FormControl(student.value || '', Validators.pattern('[0-9]{10}'));
            
          // }
          // else if(student.type == 'email'){
          //   fatherInfoGroup[keys[1]] = student.required ?  new FormControl(student.value || '', Validators.compose([Validators.required, Validators.email]))
          //                                         : new FormControl(student.value || '', Validators.email);
          // }
          // else{
          //   fatherInfoGroup[keys[1]] = student.required ?  new FormControl(student.value || '', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')]))
          //                                         : new FormControl(student.value || '',  Validators.pattern('[a-zA-Z ]*'));
          // }

          fatherInfoGroup[keys[1]] = this.newFormControl(student);
        }
        group[keys[0]] = new FormGroup(fatherInfoGroup);
      }
      else if(keys[0]=='mother'){
        if(keys[1]=='name'){
        
          // motherNameGroup[keys[2]] = student.required ?  new FormControl(student.value || '', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')]))
          //                                       : new FormControl(student.value || '',  Validators.pattern('[a-zA-Z ]*'));

          motherNameGroup[keys[2]] = this.newFormControl(student);
        
          motherInfoGroup[keys[1]] = new FormGroup(motherNameGroup);                                      
        }
        else{
          // if(student.type == 'number'){
            
          //   motherInfoGroup[keys[1]] = student.required ?  new FormControl(student.value || '', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')]))
          //                                         : new FormControl(student.value || '', Validators.pattern('[0-9]{10}'));
            
          // }
          // else if(student.type == 'email'){
          //   motherInfoGroup[keys[1]] = student.required ?  new FormControl(student.value || '', Validators.compose([Validators.required, Validators.email]))
          //                                         : new FormControl(student.value || '', Validators.email);
          // }
          // else{
          //   motherInfoGroup[keys[1]] = student.required ?  new FormControl(student.value || '', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')]))
          //                                         : new FormControl(student.value || '',  Validators.pattern('[a-zA-Z ]*'));
          // }

          motherInfoGroup[keys[1]] = this.newFormControl(student);
        }
        group[keys[0]] = new FormGroup(motherInfoGroup);
      }
      // else if(student.type == 'number'){
      //   if(student.label == 'Pincode'){
      //     group[student.key] = student.required ?  new FormControl(student.value || '', Validators.compose([Validators.required, Validators.pattern('[0-9]{6}')]))
      //                                         : new FormControl(student.value || '', Validators.pattern('[0-9]{6}'));
      //   }
      //   else{
      //     group[student.key] = student.required ?  new FormControl(student.value || '', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')]))
      //                                         : new FormControl(student.value || '', Validators.pattern('[0-9]{10}'));
      //   }
      // }
      // else if(student.type == 'date'){
      //   group[student.key] = student.required ?  new FormControl(student.value || '', Validators.compose([Validators.required, dobValidator(5, 20)]))
      //                                         : new FormControl(student.value || '', dobValidator(5, 20));
      // }
      // else if(student.type == 'email'){
      //   group[student.key] = student.required ?  new FormControl(student.value || '', Validators.compose([Validators.required, Validators.email]))
      //                                         : new FormControl(student.value || '', Validators.email);
      // }
      // else{
      //   group[student.key] = student.required ?  new FormControl(student.value || '', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')]))
      //                                         : new FormControl(student.value || '',  Validators.pattern('[a-zA-Z ]*'));
      // }
      else{
        group[student.key] = this.newFormControl(student);
      }
    });
    console.log('group: ' + group);
    console.log(new FormGroup(group));
    return new FormGroup(group);
  }

  newFormControl(student: StudentBase<string>): any{
    if(student.type == 'number'){
      if(student.label == 'Pincode'){
        return student.required ?  new FormControl(student.value || '', Validators.compose([Validators.required, Validators.pattern('[0-9]{6}')]))
                                            : new FormControl(student.value || '', Validators.pattern('[0-9]{6}'));
      }
      else{
        return student.required ?  new FormControl(student.value || '', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')]))
                                            : new FormControl(student.value || '', Validators.pattern('[0-9]{10}'));
      }
    }
    else if(student.type == 'date'){
      return student.required ?  new FormControl(student.value || '', Validators.compose([Validators.required, dobValidator(5, 20)]))
                                            : new FormControl(student.value || '', dobValidator(5, 20));
    }
    else if(student.type == 'email'){
      return student.required ?  new FormControl(student.value || '', Validators.compose([Validators.required, Validators.email]))
                                            : new FormControl(student.value || '', Validators.email);
    }
    else{
      return student.required ?  new FormControl(student.value || '', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')]))
                                            : new FormControl(student.value || '',  Validators.pattern('[a-zA-Z ]*'));
    }
  }

}
