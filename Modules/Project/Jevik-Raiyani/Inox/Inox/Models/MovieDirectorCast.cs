using System;
using System.Collections.Generic;

#nullable disable

namespace Inox.Models
{
    public partial class MovieDirectorCast
    {
        public int MovieId { get; set; }
        public int NameId { get; set; }
        public string Role { get; set; }

        public virtual Movie Movie { get; set; }
        public virtual DirectorCast Name { get; set; }
    }
}
