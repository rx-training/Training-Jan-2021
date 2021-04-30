using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Day17Assignment.Models.IRepo;
using Day17Assignment.Models.Repo;


namespace Day17Assignment.Models.Repo
{
    public class DoctorRepo : Hospital<Doctor>, IDoctor
    {
        public DoctorRepo(Day17AssignmentContext context) : base(context)
        {

        }
    }
}
