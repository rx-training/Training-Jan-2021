using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HosptialWebApi.Model
{
    public class vGetMedicines
    {
        
        public int PatientID { get; set; }
        public string Name { get; set; }
        public string MedicineName { get; set; }
        public string Timing { get; set; }
    }
}
