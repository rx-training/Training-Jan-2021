using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplicationPractice.Models.IRepository;

namespace WebApplicationPractice.Models.Repository
{
    public class StudentRepository : GenericRepository<Student>, IStudents
    {
        public StudentRepository(Day12Context context) : base(context)
        {

        }
    }
}
