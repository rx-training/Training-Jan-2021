using System;
using System.Collections.Generic;

#nullable disable

namespace HosptialWebApi.Model
{
    public partial class HealthWorker
    {
        public int HealthWorkerId { get; set; }
        public string Name { get; set; }
        public int? DepartmentId { get; set; }

        public virtual Department Department { get; set; }
    }
}
