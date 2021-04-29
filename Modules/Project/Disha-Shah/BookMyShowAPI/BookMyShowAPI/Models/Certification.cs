using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class Certification
    {
        public Certification()
        {
            Movies = new HashSet<Movie>();
        }

        public int CertificationId { get; set; }
        public string Certification1 { get; set; }

        public virtual ICollection<Movie> Movies { get; set; }
    }
}
