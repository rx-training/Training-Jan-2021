using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class Screen
    {
        public Screen()
        {
            ScreenSeatsCategories = new HashSet<ScreenSeatsCategory>();
            ScreenShowTimings = new HashSet<ScreenShowTiming>();
            ScreensMovies = new HashSet<ScreensMovie>();
        }

        public int ScreenId { get; set; }
        public int TheatreId { get; set; }

        public virtual Theatre Theatre { get; set; }
        public virtual ICollection<ScreenSeatsCategory> ScreenSeatsCategories { get; set; }
        public virtual ICollection<ScreenShowTiming> ScreenShowTimings { get; set; }
        public virtual ICollection<ScreensMovie> ScreensMovies { get; set; }
    }
}
