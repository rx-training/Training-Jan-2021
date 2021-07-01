using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NaukriProject.Models.Authentication
{
    public class RegisterJobSeeker
    {
        //[Required(ErrorMessage = "User Name is Required")]
        //public string UserName { get; set; }

        [Required(ErrorMessage = "First Name is Required")]
        public string jobSeekerFirstName { get; set; }

        [Required(ErrorMessage = "Middle Name is Required")]
        public string jobSeekerMiddleName { get; set; }

        [Required(ErrorMessage = "Last Name is Required")]
        public string jobSeekerLastName { get; set; }

        [EmailAddress]
        [Required(ErrorMessage = "Email is Required")]
        public string jobSeekerEmail { get; set; }

        [Required(ErrorMessage = "Password is Required")]
        public string jobSeekerPassword { get; set; }

        [Required(ErrorMessage = "Phone Number is Required")]
        public Int64 jobSeekerPhoneNumber { get; set; }

        [Required(ErrorMessage = "JobSeeker type is Required")]
        public string jobSeekerType { get; set; }

        [Required(ErrorMessage = "Resume is Required")]
        public string jobSeekerResume { get; set; }

        [Required(ErrorMessage = "Skills is Required")]
        public string jobSeekerSkills { get; set; }

        public string Projects { get; set; }

        [Required(ErrorMessage = "DOB is Required")]
        public DateTime jobSeekerDob { get; set; }

        [Required(ErrorMessage = "Gender is Required")]
        public string jobSeekerGender { get; set; }

        [Required(ErrorMessage = "Address is Required")]
        public string jobSeekerAddress { get; set; }

        [Required(ErrorMessage = "Area PinCode is Required")]
        public int jobSeekerAreaPinCode { get; set; }
        
        public ICollection<JobSeekerEducation> jobSeekerEducations { get; set; }
        public ICollection<JobSeekerJobHistory> jobSeekerJobHistories{ get; set; }
    }
}
