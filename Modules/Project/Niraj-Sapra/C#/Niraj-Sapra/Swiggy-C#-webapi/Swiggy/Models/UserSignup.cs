using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class UserSignup
    {
        public UserSignup()
        {
            Ordertables = new HashSet<Ordertable>();
            Paymenttables = new HashSet<Paymenttable>();
        }

        public int UserId { get; set; }
        public string Options { get; set; }
        public string Phoneno { get; set; }
        public string Emails { get; set; }
        public string Names { get; set; }
        public string Lpassword { get; set; }

        public virtual ICollection<Ordertable> Ordertables { get; set; }
        public virtual ICollection<Paymenttable> Paymenttables { get; set; }
    }
}
