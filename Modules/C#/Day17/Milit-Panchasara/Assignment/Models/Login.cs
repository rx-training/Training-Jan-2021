using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models
{
    [Keyless]
    public class Login
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
