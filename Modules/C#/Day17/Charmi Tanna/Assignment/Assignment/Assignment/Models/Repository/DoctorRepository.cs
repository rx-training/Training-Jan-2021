using Assignment.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models.Repository
{
    public class DoctorRepository : DoctorPatientNurseRepository<Doctor>,IDoctor
    {
        public DoctorRepository(HOSPITAL11Context context) : base(context)
        {

        }
    }
}
