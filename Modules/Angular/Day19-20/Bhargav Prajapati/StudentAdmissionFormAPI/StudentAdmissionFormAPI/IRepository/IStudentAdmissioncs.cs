using StudentAdmissionFormAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentAdmissionFormAPI.IRepository
{
    public interface IStudentAdmissioncs
    {
       public IEnumerable<StudentDetail> GetAllStudent();
       public void InsertStudent(StudentDetail student);
       public void UpdateStudent(int id ,StudentDetail student);
       public void DeleteStudent(int id);



    }
}
