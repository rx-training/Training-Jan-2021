using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationAssignmentDay17.Models.IRepository
{
    public interface IPatient : GenericInterface<Patient>
    {
        IEnumerable<MedicineList> GetPatients();
    }
}
