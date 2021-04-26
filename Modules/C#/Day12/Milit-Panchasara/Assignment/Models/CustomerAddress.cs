using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Assignment.Models
{
    class CustomerAddress
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Address { get; set; }

        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
    }
}
