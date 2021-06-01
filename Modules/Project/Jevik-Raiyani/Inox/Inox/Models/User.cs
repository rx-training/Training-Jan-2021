using System;
using System.Collections.Generic;

#nullable disable

namespace Inox.Models
{
    public partial class User
    {
        public User()
        {
            Tickets = new HashSet<Ticket>();
        }

        public string UserGmail { get; set; }
        public string UserName { get; set; }
        public int? UserPhoneNo { get; set; }
        public int Age { get; set; }

        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
