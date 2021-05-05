using Assignment.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models.Repository
{
    public class PatientRepository : DoctorPatientNurseRepository<Patient>, IPatient
    {
        public PatientRepository(HOSPITAL11Context context) : base(context)
        {

        }
    }
}
