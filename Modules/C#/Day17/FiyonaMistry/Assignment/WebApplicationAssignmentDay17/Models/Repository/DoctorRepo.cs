using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplicationAssignmentDay17.Models.IRepository;

namespace WebApplicationAssignmentDay17.Models.Repository
{
    public class DoctorRepo : GenericRepository<Doctor>, IDoctor 
    {
        public DoctorRepo(Day11Context context) : base(context)
        {

        }

        public IEnumerable<Doctor> GetByDocId(int id)
        {
            var con = context.Doctors.Include("Patients").Where(x => x.DocId == id);
            return con;
        }
    }
}
