using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace NaukriProject.Models
{
    public partial class SubSector
    {
        public SubSector()
        {
            Companies = new HashSet<Company>();
        }

        [Key]
        public int SubSectorId { get; set; }
        public string SubSectorName { get; set; }
        public int? MainSectorId { get; set; }

        public virtual MainSector MainSector { get; set; }
        public virtual ICollection<Company> Companies { get; set; }
    }
}
