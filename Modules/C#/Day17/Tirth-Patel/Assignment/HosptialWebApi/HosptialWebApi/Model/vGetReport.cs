using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HosptialWebApi.Model
{
  //  [NotMapped]
    public class vGetReport
    {
       
        public  int PatientId { get; set; }
        public string Name { get; set; }
        public int DoctorID { get; set; }
        public string DoctorName { get; set; }
    }
}
