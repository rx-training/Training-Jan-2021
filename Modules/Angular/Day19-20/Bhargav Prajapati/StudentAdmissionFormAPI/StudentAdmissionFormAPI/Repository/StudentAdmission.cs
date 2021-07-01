using StudentAdmissionFormAPI.IRepository;
using StudentAdmissionFormAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentAdmissionFormAPI.Repository
{
    public class StudentAdmission : IStudentAdmissioncs
    {
        private readonly SchoolAdmissionFormContext context;
        public StudentAdmission(SchoolAdmissionFormContext ctx)
        {
            context = ctx;

        }

        public void DeleteStudent(int id)
        {
            var deletedstudent = context.StudentDetails.Single(s=>s.StudentId==id);
            context.Remove(deletedstudent);
            context.SaveChanges();
        }

        public IEnumerable<StudentDetail> GetAllStudent()
        {
           var data= context.StudentDetails;
            return data;
        }

        public void InsertStudent(StudentDetail student)
        {
            context.Add(student);
            context.SaveChanges();
        }

        public void UpdateStudent(int id, StudentDetail student)
        {
            var Editstudent = context.StudentDetails.Single(s => s.StudentId == id);
            Editstudent.StudentFirstName = student.StudentFirstName;
            Editstudent.StudentMiddleName = student.StudentMiddleName;
            Editstudent.StudentLastName = student.StudentLastName;
            Editstudent.Dob = student.Dob;
            Editstudent.PlaceofBirth = student.PlaceofBirth;
            Editstudent.FirstLanguage = student.FirstLanguage;
            Editstudent.City = student.City;
            Editstudent.State = student.State;
            Editstudent.Country = student.Country;
            Editstudent.PinNumber = student.PinNumber;
            Editstudent.FatherFirstName = student.FatherFirstName;
            Editstudent.FatherMiddleName = student.FatherMiddleName;
            Editstudent.FatherLastName = student.FatherLastName;
            Editstudent.FatherEmail = student.FatherEmail;
            Editstudent.FatherEducationQualification = student.FatherEducationQualification;
            Editstudent.FatherProfession = student.FatherProfession;
            Editstudent.FatherDesignation = student.FatherDesignation;
            Editstudent.FatherPhoneNumber = student.FatherPhoneNumber;
            Editstudent.MotherFirstName = student.MotherFirstName;
            Editstudent.MotherMiddleName = student.MotherMiddleName;
            Editstudent.MotherLastName = student.MotherLastName;
            Editstudent.MotherEmail = student.MotherEmail;
            Editstudent.MotherEducationQualification = student.MotherEducationQualification;
            Editstudent.MotherProfession = student.MotherProfession;
            Editstudent.MotherDesignation = student.MotherDesignation;
            Editstudent.MotherPhoneNumber = student.MotherPhoneNumber;
            Editstudent.Relation = student.Relation;
            Editstudent.RelationContectNumber = student.RelationContectNumber;
            Editstudent.ReferenceThrrough = student.ReferenceThrrough;
            Editstudent.ReferenceContectNumber = student.ReferenceContectNumber;

            context.SaveChanges();

        }
    }
}
