using StudentAdmissionFormAPI.IRepository;
using StudentAdmissionFormAPI.Models;
using System;
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

        public override void Update(int id, Student entity)
        {
            var existingStudent = context.Students.Where(s => s.StudentId == id)
                                                    .SingleOrDefault<Student>();

            existingStudent.PlaceOfBirth = entity.PlaceOfBirth;
            existingStudent.Name = entity.Name;
            existingStudent.MotherQualification = entity.MotherQualification;
            existingStudent.MotherProfession = entity.MotherProfession;
            existingStudent.MotherPhone = entity.MotherPhone;
            existingStudent.MotherName = entity.MotherName;
            existingStudent.MotherEmail = entity.MotherEmail;
            existingStudent.MotherDesignation = entity.MotherDesignation;
            existingStudent.Language = entity.Language;
            existingStudent.FatherQualification = entity.FatherQualification;
            existingStudent.FatherProfession = entity.FatherProfession;
            existingStudent.FatherPhone = entity.FatherPhone;
            existingStudent.FatherName = entity.FatherName;
            existingStudent.FatherEmail = entity.FatherEmail;
            existingStudent.FatherDesignation = entity.FatherDesignation;
            existingStudent.Dob = entity.Dob;
            existingStudent.Address = entity.Address;

            context.SaveChanges();

        }

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
