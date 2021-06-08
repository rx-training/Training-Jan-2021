using StudentAdmissionAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentAdmissionAPI.IRepository
{
   public interface IStudent : IStudentAdmission<StudentAdmissionTable>
    {
       
    }
}
