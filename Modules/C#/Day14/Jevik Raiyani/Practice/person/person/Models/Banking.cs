﻿using System;
using System.Collections.Generic;

#nullable disable

namespace person.Models
{
    public partial class Banking
    {
        public int? Account { get; set; }
        public string Name { get; set; }
        public decimal? Balance { get; set; }
    }
}
