using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GSRTC.Models
{
    public class Enquiry
    {
     
        public int EnquiryID { get; set; }
        public string DivisionName { get; set; }
        [ForeignKey("EnquiryfkID")]
        public ICollection<Division> Divisions { get; set; }
    }
}
