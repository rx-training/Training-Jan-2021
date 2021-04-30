
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace UberAPI.Models.Auth
{
    public class Login
    {
        [Required(ErrorMessage = "Contact Number is required.")]
        public string ContactNumber { get; set; }
        [Required(ErrorMessage = "Password is required.")]
        public string Password { get; set; }
    }
}
