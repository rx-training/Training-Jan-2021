using System;
using System.Collections.Generic;

#nullable disable

namespace Zee_News_WebApi.Models
{
    public partial class Viewers1
    {
        public Viewers1()
        {
            Activities = new HashSet<Activity>();
        }
        //per user user mailId will be his userId and it is primary key
        public string UserId { get; set; }
        public string Name { get; set; }
        public int? Age { get; set; }
        public decimal MobileNo { get; set; }
        public string City { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<Activity> Activities { get; set; }
    }
}
