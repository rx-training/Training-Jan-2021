using StudentAdmissionFormAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentAdmissionFormAPI.IRepository
{
    public interface IStudent : IGenericInterface<Student>
    {
        public IEnumerable GetAllStudents();
        public void UpdateStudent(Student student);
    }
}
