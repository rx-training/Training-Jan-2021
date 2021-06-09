using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Models
{
    public partial class DynamicNavbar
    {
        [Key]
        public int NavbarId { get; set; }
        public string Name { get; set; }
    }
}
