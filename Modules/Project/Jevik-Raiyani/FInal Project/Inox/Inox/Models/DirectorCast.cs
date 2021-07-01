using System;
using System.Collections.Generic;

#nullable disable

namespace Inox.Models
{
    public partial class DirectorCast
    {
        public DirectorCast()
        {
            MovieDirectorCasts = new HashSet<MovieDirectorCast>();
        }

        public int NameId { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }

        public virtual ICollection<MovieDirectorCast> MovieDirectorCasts { get; set; }
    }
}
