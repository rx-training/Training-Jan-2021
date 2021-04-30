using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Doctors
    {
        public int Id { get; set; }
        public string DoctorName { get; set; }

        public Department Department { get; set; }

        public ICollection<Patients> Patients { get; set; }
    }
}
