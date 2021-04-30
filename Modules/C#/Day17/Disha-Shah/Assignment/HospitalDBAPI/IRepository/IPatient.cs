using HospitalDBAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalDBAPI.IRepository
{
    public interface IPatient : IGenericInterface<Patient>
    {
        public IEnumerable PatientMedicineReport(int id);
        public IEnumerable PatientDoctors(int id);
    }
}
