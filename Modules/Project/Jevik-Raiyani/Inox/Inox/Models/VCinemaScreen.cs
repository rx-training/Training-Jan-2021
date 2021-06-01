using System;
using System.Collections.Generic;

#nullable disable

namespace Inox.Models
{
    public partial class VCinemaScreen
    {
        public int CinemaId { get; set; }
        public string CinemaName { get; set; }
        public string CinemaAddress { get; set; }
        public int CinemaPincode { get; set; }
        public string CinemaCity { get; set; }
        public int ScreenId { get; set; }
        public int ScreenNo { get; set; }
        public int Capacity { get; set; }
    }
}
