using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HosptialWebApi.Model
{
    public interface IDoctorRepository
    {
       
            Doctor GetDoctor(int id);
            IEnumerable<Doctor> GetDoctors();
            Doctor Add(Doctor toy);
            Doctor Update(Doctor toychanges);
            Doctor Delete(int id);
        
    }
}
