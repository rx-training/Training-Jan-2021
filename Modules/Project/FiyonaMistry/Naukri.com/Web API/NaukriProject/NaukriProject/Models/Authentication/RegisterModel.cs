using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace NaukriProject.Authentication
{
    public class RegisterModel
    {
        // For registering new Admin

        [Required(ErrorMessage = "User Name is Required")]
        public string UserName { get; set; }

        [EmailAddress]
        [Required(ErrorMessage = "Email is Required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is Required")]
        public string Password { get; set; }

        [Required(ErrorMessage = "First Name is Required")]
        public string Fname { get; set; }

        [Required(ErrorMessage = "Last Name is Required")]
        public string Lname { get; set; }

        [Required(ErrorMessage = "Phone Number is Required")]
        public long PhoneNumber { get; set; }
    }
}
