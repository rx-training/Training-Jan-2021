using Student.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student.Models.Repository
{
    public class StudentRepository : GenericRepository<Student>, IStudent
    {
        public StudentRepository(angularContext context) : base(context)
        {

        }
    }
}
