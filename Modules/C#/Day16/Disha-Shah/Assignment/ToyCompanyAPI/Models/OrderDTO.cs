using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToyCompanyAPI.Models
{
    public partial class OrderDTO
    {
        public int customerId { get; set; }
        public int shipToId { get; set; }
        public string toy { get; set; }
        public int qty { get; set; }

    }
}
