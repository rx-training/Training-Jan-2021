using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class ScreensMovie
    {
        public int ScreenMovieId { get; set; }
        public int ScreenId { get; set; }
        public int MovieId { get; set; }

        public virtual Movie Movie { get; set; }
        public virtual Screen Screen { get; set; }
    }
}
