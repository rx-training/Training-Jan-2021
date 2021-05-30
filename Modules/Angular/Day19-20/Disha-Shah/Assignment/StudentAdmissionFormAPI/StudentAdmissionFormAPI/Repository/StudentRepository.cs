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

    }
}
