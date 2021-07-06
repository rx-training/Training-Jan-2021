using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GSRTC.Models
{
    public class TicketBooking
    {
        [Key]
        public int TicketID { get; set; }
        public string Source { get; set; }
        public string Destination { get; set; }
        public DateTime Onward { get; set; }
        public DateTime? Return { get; set; }
        public int Seat { get; set; }
        public bool SingleLady {
            get { return SingleLady; }
            set
            {
                if (this.Seat > 1)
                {
                    SingleLady = false;
                }
                else
                {
                    SingleLady = value;
                }
            } 
        }
        public int SeatNo { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public int MobileNo { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }
        public string Ways { 
            get { return Ways; } 
            set {
                if (this.Return == null)
                {
                    Ways = "One Way";
                }
                else
                {
                    Ways = "Round Trip";
                }
            } 
        }
        public Route route { get; set; }
        public string TRoutefkID { get; set; }
        public Bus bus { get; set; }
        public string TBusfkID { get; set; }
    }
}
