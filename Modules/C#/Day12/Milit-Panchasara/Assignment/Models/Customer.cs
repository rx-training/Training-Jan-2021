using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Assignment.Models
{
    class Customer
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(20)]
        public string FirstName { get; set; }

        [Required]
        [MaxLength(20)]
        public string LastName { get; set; }

        [Required]
        [MaxLength(20)]
        public string Email { get; set; }

        [Required]
        [MaxLength(10)]
        [MinLength(10)]
        public string ContactNumber { get; set; }

        [Required]
        [MinLength(6)]
        public string Password { get; set; }

        public ICollection<CustomerAddress> CustomerAddresses { get; set; }

        public ICollection<Order> Orders { get; set; }

    }
}
