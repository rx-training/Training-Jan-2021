using HospitalDBAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalDBAPI.IRepository
{
    public interface IDoctor : IGenericInterface<Doctor>
    {
        public IEnumerable PatientDoctorReport(int id);
    }
}
