using System;
using System.Collections.Generic;

#nullable disable

namespace ToyStoreApi.Models
{
    public partial class Plant
    {
        public int ManufacuringPlantId { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
    }
}
