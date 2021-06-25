using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AmazonDemo.Models
{
    public class OrderTable
    {
        public int PlacedOrderID { get; set; }
        public int UserId { get; set; }
		public string Products { get; set; }
        public int Bill { get; set; }
        public int AddressId { get; set; }
        public int PlacedStatus { get; set; }
        public DateTime PlacedDate{ get; set; }

    }
}
