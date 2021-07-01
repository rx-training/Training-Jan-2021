using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentForm.Models;

namespace StudentForm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly StudentFormContext _context;

        public StudentsController(StudentFormContext context)
        {
            _context = context;
        }

        // GET: api/Students

        public IEnumerable<Student> GetAll()
        {
            //return _context.Students;
            var students = _context.Students;
            var EveryStud = from s in students
                            select new
         Student
                            {
                                StudentId = s.StudentId,
                                StudentName = s.StudentName,
                                FatherName = s.FatherName,
                                Dob = s.Dob,
                                PlaceOfBirth = s.PlaceOfBirth,
                                FirstLanguage = s.FirstLanguage,
                                City = s.City,
                                State = s.State,
                                CountryPin = s.CountryPin,
                                FEmail = s.FEmail,
                                FEduQualification = s.FEduQualification,
                                FDesignation = s.FDesignation,
                                FProfession = s.FProfession,
                                FPhone = s.FPhone,
                                MEmail = s.MEmail,
                                MEduQualification = s.MEduQualification,
                                MDesignation = s.MDesignation,
                                MProfession = s.MProfession,
                                MPhone = s.MPhone,
                                EmergencyContactLists = _context.EmergencyContactLists.Where(y => y.StudentId == s.StudentId).ToArray(),
                                ReferenceThrough = s.ReferenceThrough,
                                RAddressWithTel = s.RAddressWithTel,


                            };
            return EveryStud;



        }

        // GET: api/Students/5
        [HttpGet("{id}")]
        public Student GetStudent(int id)
        {
            var student = _context.Students.Find(id);

           var  EmergencyContactLists = _context.EmergencyContactLists.Where(y => y.StudentId == student.StudentId).ToArray();
            student.EmergencyContactLists = EmergencyContactLists;
            return student;
           
        }

        //// PUT: api/Students/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public Student PutStudent(int id, Student student)
        {
            _context.Entry(student).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return student;

        }

        //// POST: api/Students
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public  IEnumerable<Student> PostStudent(Student student)
        {
            _context.Add(student);
            _context.SaveChanges();
            return GetAll();
        }

        //// DELETE: api/Students/5
        [HttpDelete("{id}")]
        public  IEnumerable<Student> DeleteStudent(int id)
        {
            var student = _context.Students.Find(id);
            if (student == null)
            {
                return GetAll();
            }
            var srno = _context.EmergencyContactLists.Where(y => y.StudentId == student.StudentId);
            if (srno != null)
            {
                foreach (var item in srno)
                {
                    var emergencyContactList = _context.EmergencyContactLists.Find(item.SrNo);
                    _context.EmergencyContactLists.Remove(emergencyContactList);
                }
            }
          
           
            _context.Students.Remove(student);
            _context.SaveChanges();

            return GetAll();
        }


    }
}
