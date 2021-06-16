using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StudentForm.Models;
using StudentForm.IRepository;
namespace StudentForm.Repository
{
    public class StudentRepository:GenericRepository<Student>,IStudents
    {
        public StudentRepository(StudentFormContext context):base(context)
        {

        }
    }
}
