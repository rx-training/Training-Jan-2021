using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplicationAssignmentDay17.Models.IRepository;

namespace WebApplicationAssignmentDay17.Models.Repository
{
    public class PatientRepo : GenericRepository<Patient>, IPatient
    {
        public PatientRepo(Day11Context context) : base(context)
        {

        }

        public IEnumerable<MedicineList> GetPatients()
        {
            return context.MedicineLists;
            //context.SaveChanges();
        }
    }
}
