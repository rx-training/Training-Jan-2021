using System;
using System.Collections.Generic;

#nullable disable

namespace Inox.Models
{
    public partial class VSeat
    {
        public int ScreenId { get; set; }
        public int RowId { get; set; }
        public int RowNo { get; set; }
        public int SeatId { get; set; }
        public int SeatNo { get; set; }
        public int SeatTypeId { get; set; }
        public string Name { get; set; }
    }
}
