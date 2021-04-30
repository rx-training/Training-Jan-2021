using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace UberAPI.Models
{
    [NotMapped]
    public class NewTripInput
    {
        public long DestinationId { get; set; }
        public long SourceId { get; set; }
        public long RideTypeId { get; set; }

    }
}
