using System;
using System.Collections.Generic;

#nullable disable

namespace Inox.Models
{
    public partial class Cinema
    {
        public Cinema()
        {
            Screens = new HashSet<Screen>();
        }

        public int CinemaId { get; set; }
        public string CinemaName { get; set; }
        public string CinemaAddress { get; set; }
        public int CinemaPincode { get; set; }
        public string CinemaCity { get; set; }
        public int CinemaContactNo { get; set; }

        public virtual ICollection<Screen> Screens { get; set; }
    }
}
