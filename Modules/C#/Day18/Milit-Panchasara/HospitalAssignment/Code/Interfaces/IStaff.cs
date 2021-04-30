using HospitalAssignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalAssignment.Code.Interfaces
{
    public interface IStaff : IGenericRepo<staff>
    {
        IEnumerable<staff> DoctorIndex();
        public IEnumerable<staff> AssistantIndex();
        public IEnumerable<VPatientsWithStaff> GetStaffPatientsData(int sid);
    }
}
