using System;
using System.Collections.Generic;

#nullable disable

namespace HosptialWebApi.Model
{
    public partial class Doctor
    {
        public int DoctorsId { get; set; }
        public string DoctorName { get; set; }
        public int? DepartmentId { get; set; }

        public virtual Department Department { get; set; }
    }
}
