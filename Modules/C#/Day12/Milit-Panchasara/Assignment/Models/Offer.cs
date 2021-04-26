using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Assignment.Models
{
    [Keyless]
    class Offer
    {
        public int OfferAmount { get; set; }
    }
}
