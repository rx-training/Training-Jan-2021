using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Authentication
{
    public class RegisterModel
    {
        [Required(ErrorMessage ="Username Required")]
        public string Username { get; set; }

        [EmailAddress]
        [Required (ErrorMessage ="Email required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password required")]
        public string Password { get; set; }
    }
}
