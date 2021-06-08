import { StudentList } from './../StudentList';
import { StudentServiceService } from './../student-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-admission',
  templateUrl: './student-admission.component.html',
  styleUrls: ['./student-admission.component.css']
})
export class StudentAdmissionComponent implements OnInit {
  dataSaved = false;
  studentForm: any;
  allStudents: any;
  studentIdUpdate = 0;

  constructor(private formbuilder: FormBuilder, private studentService: StudentServiceService) { }

  ngOnInit() {
    this.studentForm = this.formbuilder.group({
      sid : ['',[Validators.required]],
      sfirstName : ['',[Validators.required]],
      smiddleName : ['',[Validators.required]],
      slastName : ['',[Validators.required]],
      dob : ['',[Validators.required]],
      placeOfBirth : ['',[Validators.required]],
      firstLanguage : ['',[Validators.required]],
      city : ['',[Validators.required]],
      state : ['',[Validators.required]],
      country : ['',[Validators.required]],
      pin : ['',[Validators.required]],
      ffirstName : ['',[Validators.required]],
      fmiddleName : ['',[Validators.required]],
      flastName : ['',[Validators.required]],
      femail : ['',[Validators.required]],
      feducationQualification : ['',[Validators.required]],
      fprofession : ['',[Validators.required]],
      fdesignation : ['',[Validators.required]],
      fphone : ['',[Validators.required]],
      mfirstName : ['',[Validators.required]],
      mmiddleName : ['',[Validators.required]],
      mlastName : ['',[Validators.required]],
      memail : ['',[Validators.required]],
      meducationQualification : ['',[Validators.required]],
      mprofession : ['',[Validators.required]],
      mdesignation : ['',[Validators.required]],
      mphone : ['',[Validators.required]],
      relation : ['',[Validators.required]],
      number : ['',[Validators.required]],
      refernceDetail : ['',[Validators.required]],
    });
    this.loadAllStudents();  
  }
  loadAllStudents() {  
   this.studentService.getAllStudents().subscribe(data=>{ this.allStudents = data;console.log(data)});
  }  
  onFormSubmit(value : any) {  
    this.dataSaved = false;  
    const student = this.studentForm.value;  
    this.CreateStudent(student.sid,student);  
    console.log(this.studentForm.value);
    this.studentForm.reset();  
  }  
  loadStudentToEdit(sid: number) {  
    //alert("hello");
    this.studentService.getStudentById(sid).subscribe(student=> {  
      alert("hello");
      this.dataSaved = false;  
  
      this.studentIdUpdate = student.sid; 
      this.studentForm.controls['sid'].setValue(student.sid);  
      this.studentForm.controls['sfirstName'].setValue(student.sfirstName);  
      this.studentForm.controls['smiddleName'].setValue(student.smiddleName);  
      this.studentForm.controls['slastName'].setValue(student.slastName);  
      this.studentForm.controls['dob'].setValue(student.dob);  
      this.studentForm.controls['placeOfBirth'].setValue(student.placeOfBirth);  
      this.studentForm.controls['firstLanguage'].setValue(student.firstLanguage);  
      this.studentForm.controls['city'].setValue(student.city);  
      this.studentForm.controls['state'].setValue(student.state);  
      this.studentForm.controls['country'].setValue(student.country);  
      this.studentForm.controls['pin'].setValue(student.pin);  
      this.studentForm.controls['ffirstName'].setValue(student.ffirstName);  
      this.studentForm.controls['fmiddleName'].setValue(student.fmiddleName);  
      this.studentForm.controls['flastName'].setValue(student.flastName);  
      this.studentForm.controls['femail'].setValue(student.femail);  
      this.studentForm.controls['feducationQualification'].setValue(student.feducationQualification);  
      this.studentForm.controls['fprofession'].setValue(student.fprofession);  
      this.studentForm.controls['fdesignation'].setValue(student.fdesignation);  
      this.studentForm.controls['fphone'].setValue(student.fphone);  
      this.studentForm.controls['mfirstName'].setValue(student.mfirstName);  
      this.studentForm.controls['mmiddleName'].setValue(student.mmiddleName);  
      this.studentForm.controls['mlastName'].setValue(student.mlastName);  
      this.studentForm.controls['memail'].setValue(student.memail);  
      this.studentForm.controls['meducationQualification'].setValue(student.meducationQualification);
      this.studentForm.controls['mprofession'].setValue(student.mprofession);  
      this.studentForm.controls['mdesignation'].setValue(student.mdesignation);  
      this.studentForm.controls['mphone'].setValue(student.mphone);  
      this.studentForm.controls['relation'].setValue(student.relation);  
      this.studentForm.controls['number'].setValue(student.number);  
      this.studentForm.controls['refernceDetail'].setValue(student.refernceDetail);  
    });  

  }  
  CreateStudent(sid :any,student: StudentList) {  
     
      this.studentService.createStudent(student).subscribe(  
        () => {  
          this.dataSaved = true;  
          alert('Record saved Successfully');  
          this.loadAllStudents();
          this.studentIdUpdate = sid; 
          student.sid = sid;
          this.studentForm.reset();  
        }
      );  
        
      }
      updateForm(sid : number ,student : StudentList)
      {
        this.studentService.updateStudent(sid,student).subscribe(() => {  
        alert("hello");
        console.log(student,sid);
        this.dataSaved = true;  
        alert('Record Updated Successfully');  
        this.loadAllStudents(); 
        this.studentIdUpdate = sid;  
        this.studentForm.reset();  
        }
        );
      }
      //convertUpdateArguments()
    // } else {  
    //   student.sid = this.studentIdUpdate;  
    //   this.studentService.updateStudent(sid,student).subscribe(() => {  
    //     this.dataSaved = true;  
    //     alert('Record Updated Successfully');  
    //     this.loadAllStudents(); 
    //     this.studentIdUpdate = sid;  
    //     this.studentForm.reset();  
    //   });  

  deleteEmployee(sid: number) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.studentService.deleteStudentById(sid).subscribe(() => {  
      this.dataSaved = true;  
      alert('Record Deleted Succefully');  
      this.loadAllStudents();  
      this.studentIdUpdate = 0;  
      this.studentForm.reset();  
    });  
  }  
}  
  resetForm() {  
    this.studentForm.reset();  
    this.dataSaved = false;  
  }  
}    

