using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HosptialWebApi.Model;
using HosptialWebApi.IRepository;

namespace HosptialWebApi.IRepository
{
    public interface IPatients: GenericInterface<Patient>
    {
        public List<vGetMedicines> GetMedicines(int patientID);
    }
}
