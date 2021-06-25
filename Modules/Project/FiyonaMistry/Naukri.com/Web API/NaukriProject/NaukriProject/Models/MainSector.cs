using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace NaukriProject.Models
{
    public partial class MainSector
    {
        public MainSector()
        {
            SubSectors = new HashSet<SubSector>();
        }

        [Key]
        public int MainSectorId { get; set; }
        public string MainSectorName { get; set; }

        public virtual ICollection<SubSector> SubSectors { get; set; }
    }
}
