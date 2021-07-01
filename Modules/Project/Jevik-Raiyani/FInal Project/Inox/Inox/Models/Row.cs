using System;
using System.Collections.Generic;

#nullable disable

namespace Inox.Models
{
    public partial class Row
    {
        public Row()
        {
            SeatsNavigation = new HashSet<Seat>();
        }

        public int RowId { get; set; }
        public int ScreenId { get; set; }
        public int RowNo { get; set; }
        public int Seats { get; set; }

        public virtual Screen Screen { get; set; }
        public virtual ICollection<Seat> SeatsNavigation { get; set; }
    }
}
