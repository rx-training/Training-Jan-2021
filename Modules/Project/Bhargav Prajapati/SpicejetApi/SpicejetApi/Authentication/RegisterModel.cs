using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Authentication
{
    public class RegisterModel
    {
        [Required(ErrorMessage = "UserName  Required") ]
        public string UserName { get; set; }
        
        [EmailAddress]
        [Required(ErrorMessage ="EMailAddress Required")]
        public string Email { get; set; }

        [Required (ErrorMessage ="Password Required")]
        public string  Password{ get; set; }
    }
}
