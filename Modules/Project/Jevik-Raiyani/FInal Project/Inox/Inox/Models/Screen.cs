using System;
using System.Collections.Generic;

#nullable disable

namespace Inox.Models
{
    public partial class Screen
    {
        public Screen()
        {
            Rows = new HashSet<Row>();
            ShowTimes = new HashSet<ShowTime>();
        }

        public int ScreenId { get; set; }
        public int CinemaId { get; set; }
        public int ScreenNo { get; set; }
        public int Capacity { get; set; }

        public virtual Cinema Cinema { get; set; }
        public virtual ICollection<Row> Rows { get; set; }
        public virtual ICollection<ShowTime> ShowTimes { get; set; }
    }
}
