using System;
using System.Collections.Generic;

#nullable disable

namespace EFCore.Models
{
    public partial class Branch
    {
        public Branch()
        {
            Borrows = new HashSet<Borrow>();
            Deposits = new HashSet<Deposit>();
        }

        public string Bname { get; set; }
        public string City { get; set; }

        public virtual ICollection<Borrow> Borrows { get; set; }
        public virtual ICollection<Deposit> Deposits { get; set; }
    }
}
