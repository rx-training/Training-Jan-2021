using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace UberAPI.Models
{
    [NotMapped]
    public class TripAction
    {
        public const string TripStarted = "TripStarted";
        public const string TripCompleted = "TripCompleted";
        public const string TripCancelled = "TripCancelled";
    }
}
