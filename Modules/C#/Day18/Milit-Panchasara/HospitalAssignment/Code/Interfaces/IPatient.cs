using HospitalAssignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalAssignment.Code.Interfaces
{
    public interface IPatient : IGenericRepo<Patient>
    {
        IEnumerable<VPatientsWithStaff> GetAllPatientsStaffReport();
        IEnumerable<VPatientsWithStaff> GetPatientStaffReport(int pid);
        IEnumerable<VPatientsMedicine> GetPatientMedicines(int pid);
        public IEnumerable<VPatientsWithStaff>? SetPatientsStaff(int pid, List<AssignedStaff> staff);
    }
}
