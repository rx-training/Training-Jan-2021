using Microsoft.EntityFrameworkCore;
using StudentAdmissionFormAPI.IRepository;
using StudentAdmissionFormAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentAdmissionFormAPI.Repository
{
    public class StudentRepository : GenericRepository<Student>, IStudent
    {
        public StudentRepository(StudentAdmissionFormDBContext context) : base(context)
        {

        }

        public IEnumerable GetAllStudents()
        {
            var students = context.Students;
            //.Select (x => new
            //{
            //    Student = new Student
            //    {
            //        Address = x.Address,
            //        StudentId = x.StudentId,
            //        PlaceOfBirth = x.PlaceOfBirth,
            //        Name = x.Name,
            //        MotherQualification = x.MotherQualification,
            //        MotherProfession = x.MotherProfession,
            //        Dob = x.Dob,
            //        FatherDesignation = x.FatherDesignation,
            //        FatherEmail = x.FatherEmail,
            //        FatherName = x.FatherName,
            //        FatherPhone = x.FatherPhone,
            //        FatherProfession = x.FatherProfession,
            //        FatherQualification = x.FatherQualification,
            //        Language = x.Language,
            //        MotherDesignation = x.MotherDesignation,
            //        MotherEmail = x.MotherEmail,
            //        MotherName = x.MotherName,
            //        MotherPhone = x.MotherPhone,
            //        EmergencyContacts = context.EmergencyContacts.Where(y => y.StudentId == x.StudentId).ToArray(),
            //        ReferenceDetails = context.ReferenceDetails.Where(y => y.StudentId == x.StudentId).ToArray()

            //    }
            //});

            var s1 = from x in students
                     select new Student
                     {
                         Address = x.Address,
                         StudentId = x.StudentId,
                         PlaceOfBirth = x.PlaceOfBirth,
                         Name = x.Name,
                         MotherQualification = x.MotherQualification,
                         MotherProfession = x.MotherProfession,
                         Dob = x.Dob,
                         FatherDesignation = x.FatherDesignation,
                         FatherEmail = x.FatherEmail,
                         FatherName = x.FatherName,
                         FatherPhone = x.FatherPhone,
                         FatherProfession = x.FatherProfession,
                         FatherQualification = x.FatherQualification,
                         Language = x.Language,
                         MotherDesignation = x.MotherDesignation,
                         MotherEmail = x.MotherEmail,
                         MotherName = x.MotherName,
                         MotherPhone = x.MotherPhone,
                         EmergencyContacts = context.EmergencyContacts.Where(y => y.StudentId == x.StudentId).ToArray(),
                         ReferenceDetails = context.ReferenceDetails.Where(y => y.StudentId == x.StudentId).ToArray()

                     };


            return s1;
        }

        public IEnumerable GetAllEmergencyContacts(int studentId)
        {
            var emergencyContacts = context.EmergencyContacts.Where(x => x.StudentId == studentId);

            return emergencyContacts.ToArray();
        }

        public IEnumerable GetAllReferenceDetails(int studentId)
        {
            var referenceDetails = context.ReferenceDetails.Where(x => x.StudentId == studentId);

            return referenceDetails;
        }

        public void UpdateEmergencyContact(int studentId, IEnumerable entity)
        {
            var existingEmergencyContact = context.EmergencyContacts.Where(s => s.StudentId == studentId);

            existingEmergencyContact = (IQueryable<EmergencyContact>)entity;

            //foreach (var item in existingEmergencyContact)
            //{
            //    item.Relation = entity.ToArray()[0].Relation;
            //    item.Contact = entity.Contact;
            //}
        }

        public void UpdateReferenceDetails(int studentId, ReferenceDetail entity)
        {
            var existingReferenceDetail = context.ReferenceDetails.Where(s => s.StudentId == studentId);

            foreach (var item in existingReferenceDetail)
            {
                item.ReferenceThrough = entity.ReferenceThrough;
                item.Address = entity.Address;
                item.Contact = entity.Contact;
            }
        }

        public void UpdateStudent(Student entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            context.SaveChanges();

            var existingContacts = context.EmergencyContacts.Where(x => x.StudentId == entity.StudentId).ToList();

            var existingReferences = context.ReferenceDetails.Where(x => x.StudentId == entity.StudentId).ToList();

            context.EmergencyContacts.RemoveRange(existingContacts);
            context.SaveChanges();

            context.EmergencyContacts.AddRange(entity.EmergencyContacts);
            context.SaveChanges();

            context.ReferenceDetails.RemoveRange(existingReferences);
            context.SaveChanges();

            context.ReferenceDetails.AddRange(entity.ReferenceDetails);
            context.SaveChanges();

        }

        //public override void Create(Student student)
        //{
        //    context.Students.Add(new Student()
        //    {
        //        Address = student.Address,
        //        Dob = student.Dob,
        //        FatherDesignation = student.FatherDesignation,
        //        FatherEmail = student.FatherEmail,
        //        FatherName = student.FatherName,
        //        FatherPhone = student.FatherPhone,
        //        FatherProfession = student.FatherProfession,
        //        FatherQualification = student.FatherQualification,
        //        Language = student.Language,
        //        MotherDesignation = student.MotherDesignation,
        //        MotherEmail = student.MotherEmail,
        //        MotherName = student.MotherName,
        //        MotherPhone = student.MotherPhone,
        //        MotherProfession = student.MotherProfession,
        //        MotherQualification = student.MotherQualification,
        //        Name = student.Name,
        //        PlaceOfBirth = student.PlaceOfBirth
        //    });

        //    context.SaveChanges();
        //}

        //public override void Update(int id, Student entity)
        //{
        //    var existingStudent = context.Students.Where(s => s.StudentId == id)
        //                                            .SingleOrDefault<Student>();

        //    existingStudent.PlaceOfBirth = entity.PlaceOfBirth;
        //    existingStudent.Name = entity.Name;
        //    existingStudent.MotherQualification = entity.MotherQualification;
        //    existingStudent.MotherProfession = entity.MotherProfession;
        //    existingStudent.MotherPhone = entity.MotherPhone;
        //    existingStudent.MotherName = entity.MotherName;
        //    existingStudent.MotherEmail = entity.MotherEmail;
        //    existingStudent.MotherDesignation = entity.MotherDesignation;
        //    existingStudent.Language = entity.Language;
        //    existingStudent.FatherQualification = entity.FatherQualification;
        //    existingStudent.FatherProfession = entity.FatherProfession;
        //    existingStudent.FatherPhone = entity.FatherPhone;
        //    existingStudent.FatherName = entity.FatherName;
        //    existingStudent.FatherEmail = entity.FatherEmail;
        //    existingStudent.FatherDesignation = entity.FatherDesignation;
        //    existingStudent.Dob = entity.Dob;
        //    existingStudent.Address = entity.Address;

        //    context.SaveChanges();

        //}

        //public override void Delete(int id)
        //{
        //    var toy = context.Toys
        //        .Where(s => s.Id == id)
        //        .SingleOrDefault();

        //    context.Toys.Remove(toy);
        //    context.SaveChanges();
        //}

    }
}
