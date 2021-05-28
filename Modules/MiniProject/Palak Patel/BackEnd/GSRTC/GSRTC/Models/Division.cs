using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GSRTC.Models
{
    public class Division
    {
        public int DivisionID { get; set; }
        public string BusStand { get; set; }
        public int EnquiryNo { get; set; }
        public Enquiry enquiry { get; set; }
        public int EnquiryfkID { get; set; }
    }
}
