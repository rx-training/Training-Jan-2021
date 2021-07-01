using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace UberAPI.Models
{
    [NotMapped]
    public class TripStatus
    {
        public const string New = "New";
        public const string Started = "Started";
        public const string Completed = "Completed";
        public const string Cancelled = "Cancelled";
    }
}
