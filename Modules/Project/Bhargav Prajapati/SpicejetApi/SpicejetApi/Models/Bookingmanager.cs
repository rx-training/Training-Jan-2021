using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace SpicejetApi.Models
{
    public partial class Bookingmanager
    {
        
        public string Pnrno { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
    }
}
