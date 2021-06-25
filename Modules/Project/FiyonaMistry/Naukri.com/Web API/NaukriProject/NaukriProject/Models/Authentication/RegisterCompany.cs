using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NaukriProject.Models.Authentication
{
    public class RegisterCompany
    {
        [Required(ErrorMessage = "UserName is Required")]
        public string UserName { get; set; }

        [EmailAddress]
        [Required(ErrorMessage = "Email is Required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is Required")]
        public string Password { get; set; }

        [Required(ErrorMessage = "Company Name is Required")]
        public string CompanyName { get; set; }

        [Required(ErrorMessage = "Sector is Required")]
        public string Sector { get; set; }

        [Required(ErrorMessage = "Company Size is Required")]
        public string CompanySize { get; set; }

        [Required(ErrorMessage = "Review is Required")]
        public double CompanyReview { get; set; }

        [Required(ErrorMessage = "About is Required")]
        public string CompanyAbout { get; set; }

        [Required(ErrorMessage = "SubSector is Required")]
        public int SubSector { get; set; }
    }
}
