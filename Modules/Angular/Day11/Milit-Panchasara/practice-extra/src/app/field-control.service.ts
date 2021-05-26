import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FieldBase } from './models/field-base';

@Injectable({
  providedIn: 'root'
})
export class FieldControlService {

  constructor() { }

  toFormGroup(fields: FieldBase<string>[]) {
    const group : any = {};
    let subGroupList : any = {};

    fields.forEach(f => {
      if(f.groupKey != null && f.groupKey != "") {
        let parsedKey = f.groupKey.split('.');
        
        parsedKey.forEach(key => {
          subGroupList[key] = new FormGroup({});
        });
      }
    });

    fields.forEach(f => {
      if(f.groupKey != null && f.groupKey != "") {
        let parsedKey = f.groupKey.split('.');
        
          let groupName = parsedKey[parsedKey.length - 1];
          let controlName = f.key;
          
          (<FormGroup>subGroupList[groupName]).addControl(controlName, f.required ? new FormControl(f.value || '',  f.validations) : new FormControl(f.value || ''));
      }
    });

    fields.forEach(f => {
      if(f.groupKey != null && f.groupKey != "") {
        let parsedKey = f.groupKey.split('.');
          for (let i = 0; i < parsedKey.length-1; i++) {
            (<FormGroup>subGroupList[parsedKey[i]]).addControl(parsedKey[i+1], (<FormGroup> subGroupList[parsedKey[i+1]]));
          }

          group[parsedKey[0]] = subGroupList[parsedKey[0]];
      }
      else{
        group[f.key] = f.required ? new FormControl(f.value || '', f.validations) : new FormControl(f.value || '');
      }
      
    });
    
    return new FormGroup(group);
  }

  static futureDateValidator(): ValidatorFn  {
    return (control: AbstractControl): {[key: string]: any} | null => {

      var date = control.value.split('-');
      // if(date.length != 3) return {futureDate: {value: control.value}};
      var inputDate = new Date(parseInt(date[0]), parseInt(date[1])-1, date[2]);
      
      return (inputDate > new Date()) ? {futureDate: {value: control.value}} : null;
    };
  }

  static duplicateRelation(): ValidatorFn {
    return (control: AbstractControl): {[key:string]: any} | null => {

      let len:unknown = control.get('length');

      for (let i = 0; i < (len as number); i++) {
        const element = control.get(i.toString());
        if(element.get('relation').value == '' || element.get('number').value == '') continue;

        for (let j = 0; j < (len as number); j++) {
          if(i==j) continue;
          const element2 = control.get(j.toString());
          if(element2.get('relation').value == '' || element2.get('number').value == '') continue;
          if(element2.get('relation').value == element.get('relation').value || element2.get('number').value == element.get('number').value) {
            return {duplicateRelation: {value: control.value}};
          } 
        }
      }

      return null;
    }
  }
}
