using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HosptialWebApi.Model;
using HosptialWebApi.IRepository;
using Microsoft.EntityFrameworkCore;

namespace HosptialWebApi.Repository
{
    public class PatientRepository : GenericRepository<Patient>, IPatients
    {
        public PatientRepository(HospitalContext context) : base(context)
        {

        }
        public List<vGetMedicines> GetMedicines(int patientID)
        {
         //   List<vGetMedicines> meds = new List<vGetMedicines>();
            var medicnes = context.VGetMedicines.FromSqlRaw($"SELECT  * FROM  vGetMedicines Where PatientID ={patientID}").ToList();
            //foreach (var item in medicnes)
            //{
            //    meds.Add(item);
            //}
            return medicnes;
        }
    }
}
