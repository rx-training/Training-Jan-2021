using Microsoft.EntityFrameworkCore;
using StudentAdmissionAPI.IRepository;
using StudentAdmissionAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentAdmissionAPI.Repository
{
    public class StudentRepository : StudentAdmissionRepository<StudentAdmissionTable>, IStudent
    {
        public StudentRepository(StudentAdmisssionContext context) : base(context)
        {

        }
    }
}
