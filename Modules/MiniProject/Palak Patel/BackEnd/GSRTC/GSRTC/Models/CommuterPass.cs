using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GSRTC.Models
{
    public class CommuterPass
    {
        [Key]
        public int ApplicationNo { get; set; }
        public DateTime EntryDate { get; set; }
        public string PassType { get; set; }
        public string PassangerType { get; set; }
        public string CommuterName { get; set; }
        public string Category { get; set; }
        public int MobileNo { get; set; }
        public string Address { get; set; }
        public int Age { get; set; }
        public string Email { get; set; }
        public DateTime DOB { get; set; }
        public string Occupation { get; set; }
        public string Gender { get; set; }
        public string Education { get; set; }
        public string OrgName { get; set; }
        public string OrgAdd { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public string FromPlace { get; set; }
        public string ToPlace { get; set; }
        public string RouteCode { get; set; }
        public string ViaPlace { get; set; }
        public string BusPassIssueLocation { get; set; }
        public string ClassOfService { get; set; }
        public int NoOfDays {
            get
            {
                return NoOfDays;
            }
            set
            {
                NoOfDays = Convert.ToInt32(this.ToDate.Date) - Convert.ToInt32(this.FromDate.Date);
            } 
        }
        public int TotalFee { get; set; }
    }
}
