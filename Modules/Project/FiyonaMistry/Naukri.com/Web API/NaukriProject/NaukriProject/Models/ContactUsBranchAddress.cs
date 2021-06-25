using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace NaukriProject.Models
{
    public partial class ContactUsBranchAddress
    {
        [Key]
        public int ContactUsBranchAddressId { get; set; }
        public string CUBALocation { get; set; }
        public string CUBAAddress { get; set; }
        public int CUBAPinCode { get; set; }
        public long? CUBAPhoneNumber { get; set; }
        public long? CUBATollFreeNumber { get; set; }
    }
}
