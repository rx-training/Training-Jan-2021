using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Patients
    {
        public int Id { get; set; }
        public string PatientName { get; set; }
        public string PatientAddress { get; set; }
        public Doctors Doctors { get; set; }
        public Drugs Drugs { get; set; }
    }
}
